export default class ProjectStats {
    constructor(conteiner, dataBase) {
      this.container = conteiner;
      this.dataBase = dataBase;
    }

    renderStats() {
        const objStats = this.creatingStateObject()

        objStats.forEach(item => this.renderStatNote(item))
    }
  
    renderStatNote(item) {
        const listItem = document.createElement('UL');
        const liName = document.createElement('LI');
        const paragraphName = document.createElement('P');
        const liCount = document.createElement('LI');
        const paragraphCount = document.createElement('P');
    
        listItem.classList.add('list-item');
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

    creatingStateObject() {
        return this.dataBase.projects.map(item => {
            const count = item.tasks.filter(item => item.done === false).length
            const { id, name} = item;
            return { id, name, count }
        });
    }
}