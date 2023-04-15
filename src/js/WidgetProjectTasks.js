export default class ProjectTasks {
  constructor(conteiner, store, storage) {
    this.container = conteiner;
    this.storage = storage;
    this.store = store;

    this._checkComplete = this.checkComplete.bind(this);
  }

  renderTask(id) {
    const tasks = this.creatingTaskObject(id);

    document.querySelectorAll('.list-item-task').forEach((item) => item.remove());

    tasks.forEach((item) => this.renderTaskNote(item));
  }

  renderTaskNote(item) {
    const listItem = document.createElement('UL');
    const liStatus = document.createElement('LI');
    const statusBox = document.createElement('DIV');
    const liName = document.createElement('LI');
    const paragraphName = document.createElement('P');

    listItem.classList.add('list-item-task');
    listItem.setAttribute('id', item.id);

    liStatus.classList.add('status');
    statusBox.classList.add('task-status');
    statusBox.setAttribute('status', item.done);

    if (statusBox.getAttribute('status') === 'true') {
      statusBox.textContent = '\u2713';
    }

    statusBox.addEventListener('click', this._checkComplete);

    liName.classList.add('name');
    paragraphName.classList.add('name-title');

    paragraphName.textContent = item.name;

    this.container.appendChild(listItem);
    listItem.append(liStatus);
    listItem.append(liName);
    liStatus.append(statusBox);
    liName.append(paragraphName);
  }

  checkComplete(e) {
    const statusItem = e.target;

    if (statusItem.getAttribute('status') === 'false') {
      this.store.completeTask(statusItem);
    } else {
      this.store.openTask(statusItem);
    }
  }

  creatingTaskObject(id) {
    const dataBase = this.storage.load();
    return dataBase.projects.filter((item) => item.id === id)[0].tasks;
  }
}
