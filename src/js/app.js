import Store from './Store';
import Storage from './Storage';
import ProjectStats from './WidgetProjectStats';
import ProjectTasks from './WidgetProjectTasks';

import background from '../img/cell.jpg';

document.querySelector('body').style.backgroundImage = `url(${background})`;

const store = new Store();

const storage = new Storage();
storage.preStartStorageBase();

const startDb = storage.load();

const statsContainer = document.querySelector('.container-stats');
const tasksContainer = document.querySelector('.container-tasks');

const statsFactory = new ProjectStats(statsContainer);
const tasksFactory = new ProjectTasks(tasksContainer, store, storage);

const preStartTaskId = 2;

statsFactory.renderStats(startDb);
tasksFactory.renderTask(preStartTaskId);
document.querySelector('.title-active-task').textContent = 'Frontend';

const selectTaskMenu = () => {
  if (!document.querySelector('.select-container')) {
    const activeTask = document.querySelector('.title-active-task');
    const selectContainer = document.createElement('DIV');
    selectContainer.classList.add('select-container');

    startDb.projects.map((item) => {
      if (item.name !== activeTask.textContent) {
        return item.name;
      }
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
  .subscribe((value) => {
    if (value.select) {
      selectTaskMenu();
    } else if (document.querySelector('.select-container')) {
      document.querySelector('.select-container').remove();
    }

    if (value.payload !== null) {
      const activeTask = value.payload;
      const changedTaskId = activeTask.closest('.list-item-task').getAttribute('id');

      if (value.status) {
        activeTask.setAttribute('status', true);
        activeTask.textContent = '\u2713';

        storage.saveStatus(changedTaskId, value.status);

        statsFactory.renderStats(storage.load());
      } else {
        activeTask.setAttribute('status', false);
        activeTask.textContent = '';

        storage.saveStatus(changedTaskId, value.status);

        statsFactory.renderStats(storage.load());
      }
    }
  });
