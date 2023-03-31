import {
  Subject, distinctUntilChanged, startWith, scan, share,
} from 'rxjs';
import Storage from './Storage';
import ProjectStats from './WidgetProjectStats';
import ProjectTasks from './WidgetProjectTasks';

import background from '../img/cell.jpg';
// import Store from './Store';

document.querySelector('body').style.backgroundImage = `url(${background})`;

const storage = new Storage();
storage.preStartStorageBase();

const startDb = storage.load();

const statsContainer = document.querySelector('.container-stats');
const tasksContainer = document.querySelector('.container-tasks');

const statsFactory = new ProjectStats(statsContainer);
const tasksFactory = new ProjectTasks(tasksContainer, startDb);

const preStartTaskId = 2;

statsFactory.renderStats(startDb);
tasksFactory.renderTask(preStartTaskId);
document.querySelector('.title-active-task').textContent = 'Frontend';

const ACTIONS = {
  ClickOpenSelect: 'OPENSELECT',
  ClickCloseSelect: 'CLOSESELECT',
  ClickCompleteTask: 'COMPLETE',
  ClickOpenTask: 'OPEN',
};

function reduce(state, action) {
  switch (action.type) {
    case ACTIONS.ClickOpenSelect:
      return { ...state, select: true };
    case ACTIONS.ClickCloseSelect:
      return { ...state, select: false };
    case ACTIONS.ClickCompleteTask:
      return { ...state, status: true };
    case ACTIONS.ClickOpenTask:
      return { ...state, status: false };
    default:
      return state;
  }
}

class Store {
  constructor() {
    this.tasksList = storage.load;
    this.actions$ = new Subject();
    this.stateSelect$ = this.actions$.asObservable().pipe(
      startWith({ type: 'INITIALIZATION' }),
      scan((state, action) => reduce(state, action), { select: false }),
      share(),
    );
    this.stateStatus$ = this.actions$.asObservable().pipe(
      startWith({ type: 'INITIALIZATION' }),
      scan((state, action) => reduce(state, action), { status: false }),
      share(),
    );
  }

  dispatch(type, payload = null) {
    this.actions$.next({ type, payload });
  }

  openSelect(value = null) {
    this.dispatch(ACTIONS.ClickOpenSelect, value);
  }

  closeSelect(value = null) {
    this.dispatch(ACTIONS.ClickCloseSelect, value);
  }

  completeTask(value = null) {
    this.dispatch(ACTIONS.ClickCompleteTask, value);
  }

  openTask(value = null) {
    this.dispatch(ACTIONS.ClickOpenTask, value);
  }
}

const store = new Store();

let el;

const chekListener = () => {
  const statusBoxes = document.querySelectorAll('.task-status');

  statusBoxes.forEach((item) => item.addEventListener('click', (e) => {
    const statusItem = e.target;
    el = e.target;
    if (statusItem.getAttribute('status') === 'false') {
      store.completeTask();
    } else {
      store.openTask();
    }
  }));
};

const selectTaskMenu = () => {
  if (!document.querySelector('.select-container')) {
    const activeTask = document.querySelector('.title-active-task');
    const selectContainer = document.createElement('DIV');
    selectContainer.classList.add('select-container');

    startDb.projects.map((item) => {
      if (item.name !== activeTask.textContent) { return item.name; }
      return false;
    }).forEach((item) => {
      if (item) {
        const paragraph = document.createElement('P');
        paragraph.classList.add('select-paragraph');
        paragraph.textContent = item;

        paragraph.addEventListener('click', (e) => {
          const taskName = e.target.textContent;
          activeTask.textContent = taskName;

          const taskId = storage.loadTaskId(taskName);
          tasksFactory.renderTask(taskId);

          chekListener();

          store.closeSelect();
        });
        selectContainer.append(paragraph);
      }
    });

    tasksContainer.prepend(selectContainer);
  }
};

// storage.removeStorage()

const selectMenu = document.querySelector('.title-active-task');

selectMenu.addEventListener('click', () => {
  if (!document.querySelector('.select-container')) {
    store.openSelect();
  } else {
    store.closeSelect();
  }
});

store.stateSelect$
  .pipe(
    distinctUntilChanged(),
  ).subscribe((value) => {
    console.log(value);
    if (value.select) {
      selectTaskMenu();
    } else if (document.querySelector('.select-container')) {
      document.querySelector('.select-container').remove();
    }
  });

store.stateStatus$
  .pipe(
    distinctUntilChanged(),
  ).subscribe((value) => {
    if (el) {
      const changedTaskId = el.closest('.list-item-task').getAttribute('id');
      if (value.status) {
        console.log(value.status);
        el.setAttribute('status', true);
        el.textContent = '\u2713';

        storage.saveStatus(changedTaskId, value.status);

        statsFactory.renderStats(storage.load());
      } else {
        console.log(value.status);
        el.setAttribute('status', false);
        el.textContent = '';

        storage.saveStatus(changedTaskId, value.status);

        statsFactory.renderStats(storage.load());
      }
    }
  });
