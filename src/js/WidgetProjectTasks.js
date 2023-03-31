export default class ProjectTasks {
  constructor(conteiner, dataBase) {
    this.container = conteiner;
    this.dataBase = dataBase;
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

    liName.classList.add('name');
    paragraphName.classList.add('name-title');

    paragraphName.textContent = item.name;

    this.container.appendChild(listItem);
    listItem.append(liStatus);
    listItem.append(liName);
    liStatus.append(statusBox);
    liName.append(paragraphName);
  }

  creatingTaskObject(id) {
    return this.dataBase.projects.filter((item) => item.id === id)[0].tasks;
  }
}
