import Storage from './Storage';
import ProjectStats from './WidgetProjectStats';
import ProjectTasks from './WidgetProjectTasks';

import {
    Subject, catchError, of, interval, mergeMap, map, fromEvent, distinctUntilChanged, startWith, scan, share
  } from 'rxjs';

import background from '../img/cell.jpg';
// import Store from './Store';

document.querySelector('body').style.backgroundImage = `url(${background})`;

const storage = new Storage();
storage.preStartStorageBase();

const startDb = storage.load();

const statsContainer = document.querySelector('.container-stats');
const tasksContainer = document.querySelector('.container-tasks');

const statsFactory = new ProjectStats(statsContainer, startDb);
const tasksFactory = new ProjectTasks(tasksContainer, startDb);

const taskId = 2

statsFactory.renderStats()
tasksFactory.renderTask(taskId)
document.querySelector('.title-active-task').textContent = 'Frontend'

// const selectItem = document.querySelector('.title-active-task')

const ACTIONS = {
    ClickOpenSelect: 'OPENSELECT',
    ClickCloseSelect: 'CLOSESELECT',
    ClickCompleteTask: 'COMPLETE',
    ClickOpenTask: 'OPEN'
}

function reduce(state, action) {
    switch (action.type) {
        case ACTIONS.ClickOpenSelect:
            return {...state, select: true}
        case ACTIONS.ClickCloseSelect:
            return {...state, select: false}
        case ACTIONS.ClickCompleteTask:
            return {...state, status: true}
        case ACTIONS.ClickOpenTask:
            return {...state, status: false}
    default:
        return state
    }
}

// const taskClick$ = fromEvent(selectItem, 'click')

const selectTask = () => {
    if (!document.querySelector('.select-container')) {
        const activeTask = document.querySelector('.title-active-task')
        const selectContainer = document.createElement('DIV');
        selectContainer.classList.add('select-container');

        startDb.projects.map(item => {if (item.name !== activeTask.textContent) {return item.name}}).forEach(item => {
            const paragraph = document.createElement('P');
            paragraph.classList.add('select-paragraph')
            paragraph.textContent = item
            selectContainer.append(paragraph)
        })

        tasksContainer.prepend(selectContainer)
    } else {
        // document.querySelector('.select-container').remove()
    }
}

const completeTask = (el) => {
    // const status = document.querySelector('.task-status')
    // console.log(status.getAttribute('status'))
    console.log(el.getAttribute('status'))
    if (el.getAttribute('status') === 'false') {
        console.log(el.getAttribute('status'))
        
        el.setAttribute('status', false);
        el.textContent = '';
    } else {
        // console.log(el.getAttribute('status'))
        el.setAttribute('status', true);
        el.textContent = '\u2713';
        
    }
}

// taskClick$.subscribe(selectTask)

const startStatus = (directionId, taskId) => {
    const task = startDb.projects.filter(item => item.id === directionId)[0].tasks.filter(item => item.id === taskId)[0].done
    console.log(task)
}

startStatus(1,6)

class Store {
    constructor() {
        this.actions$ = new Subject();
        this.stateSelect$ = this.actions$.asObservable().pipe(
            startWith({ type: 'INITIALIZATION'}),
            scan((state, action) => reduce(state, action), { select: false }),
            share()
        )
        this.stateStatus$ = this.actions$.asObservable().pipe(
            startWith({ type: 'INITIALIZATION'}),
            scan((state, action) => reduce(state, action), { status: false }),
            share()
        )
    }

    dispatch(type, payload = null) {
        this.actions$.next({ type, payload })
    }

    openSelect(value = null) {
        this.dispatch(ACTIONS.ClickOpenSelect, value)
    }

    closeSelect(value = null) {
        this.dispatch(ACTIONS.ClickCloseSelect, value)
    }

    completeTask(value = null) {
        this.dispatch(ACTIONS.ClickCompleteTask, value)
    }

    openTask(value = null) {
        this.dispatch(ACTIONS.ClickOpenTask, value)
    }
}

const store = new Store();

const selectMenu = document.querySelector('.title-active-task');
const statusBoxes = document.querySelectorAll('.task-status');

selectMenu.addEventListener('click', () => {
    if (!document.querySelector('.select-container')) {
        store.openSelect()
    } else {
        store.closeSelect()
    }
})

let el

statusBoxes.forEach(item => item.addEventListener('click', (e) => {
    const statusItem = e.target
    el = e.target
    if (statusItem.getAttribute('status') === 'false') {
        // console.log(statusItem.getAttribute('status'))
        // el.setAttribute('status', false);
        // el.textContent = '';
        store.openTask()
    } else {
        // el.setAttribute('status', true);
        // el.textContent = '';
        store.completeTask()
    }
        
}))

store.stateSelect$
    .pipe(
        distinctUntilChanged()
    ).subscribe(value => {
        console.log(value)
        if (value.select) {
            selectTask()
        } else {
            if (document.querySelector('.select-container')) {
                document.querySelector('.select-container').remove()
            }
        }
    })

store.stateStatus$
    .pipe(
        // distinctUntilChanged()
    ).subscribe(value => {
        if (el) {
            const taskId = el.closest('.list-item').getAttribute('id')
            if (!value.status) {
                console.log(value.status)
                el.setAttribute('status', false);
                el.textContent = '';

                storage.saveStatus(taskId, value.status)
                console.log(JSON.parse(localStorage.getItem('data')))
            } else {
                console.log(value.status)
                el.setAttribute('status', true);
                el.textContent = '\u2713';
                
                storage.saveStatus(taskId, value.status)
                console.log(JSON.parse(localStorage.getItem('data')))
            }
        }
    })