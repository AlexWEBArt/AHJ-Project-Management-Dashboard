export default class ProjectStats {
  constructor(conteiner) {
    this.container = conteiner;
  }

  renderStats(db) {
    const objStats = ProjectStats.creatingStateObject(db);

    document.querySelectorAll('.list-item-stat').forEach((item) => item.remove());

    objStats.forEach((item) => this.renderStatNote(item));
  }

  renderStatNote(item) {
    const listItem = document.createElement('UL');
    const liName = document.createElement('LI');
    const paragraphName = document.createElement('P');
    const liCount = document.createElement('LI');
    const paragraphCount = document.createElement('P');

    listItem.classList.add('list-item-stat');
    listItem.setAttribute('id', item.id);

    liName.classList.add('name');
    paragraphName.classList.add('name-title');

    liCount.classList.add('count');
    paragraphCount.classList.add('quantity');

    paragraphName.textContent = item.name;
    paragraphCount.textContent = item.count;

    this.container.appendChild(listItem);
    listItem.append(liName);
    listItem.append(liCount);
    liName.append(paragraphName);
    liCount.append(paragraphCount);
  }

  static creatingStateObject(db) {
    return db.projects.map((item) => {
      const count = item.tasks.filter((task) => task.done === false).length;
      const { id, name } = item;
      return { id, name, count };
    });
  }
}
