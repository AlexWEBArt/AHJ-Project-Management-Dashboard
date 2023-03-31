export default class Storage {
  constructor() {
    this.storage = localStorage;
  }

  preStartStorageBase() {
    const preStartBase = {
      projects: [
        {
          id: 1,
          name: 'REST Backend',
          tasks: [
            {
              id: 5,
              name: 'Push Notifications',
              done: false,
            },
            {
              id: 6,
              name: 'Apple Pay Support',
              done: true,
            },
            {
              id: 7,
              name: '|18n',
              done: false,
            },
            {
              id: 8,
              name: 'AppStore Publication',
              done: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Frontend',
          tasks: [
            {
              id: 9,
              name: 'Push Notifications',
              done: false,
            },
            {
              id: 10,
              name: 'Apple Pay Support',
              done: false,
            },
            {
              id: 11,
              name: '|18n',
              done: false,
            },
            {
              id: 12,
              name: 'AppStore Publication',
              done: false,
            },
            {
              id: 13,
              name: 'Push Notifications',
              done: false,
            },
            {
              id: 14,
              name: 'Apple Pay Support',
              done: false,
            },
            {
              id: 15,
              name: '|18n',
              done: false,
            },
            {
              id: 16,
              name: 'AppStore Publication',
              done: true,
            },
            {
              id: 17,
              name: 'AppStore Publication',
              done: false,
            },
          ],
        },
        {
          id: 3,
          name: 'Android App',
          tasks: [
            {
              id: 18,
              name: 'Push Notifications',
              done: true,
            },
            {
              id: 19,
              name: 'Apple Pay Support',
              done: false,
            },
            {
              id: 20,
              name: '|18n',
              done: false,
            },
            {
              id: 21,
              name: 'AppStore Publication',
              done: false,
            },
            {
              id: 22,
              name: 'AppStore Publication',
              done: false,
            },
            {
              id: 23,
              name: 'AppStore Publication',
              done: false,
            },
            {
              id: 24,
              name: 'AppStore Publication',
              done: false,
            },
          ],
        },
        {
          id: 4,
          name: 'iOS App',
          tasks: [
            {
              id: 25,
              name: 'Push Notifications',
              done: true,
            },
            {
              id: 26,
              name: 'Apple Pay Support',
              done: false,
            },
            {
              id: 27,
              name: '|18n',
              done: false,
            },
            {
              id: 28,
              name: 'AppStore Publication',
              done: false,
            },
          ],
        },
      ],
    };

    this.storage.setItem('data', JSON.stringify(preStartBase));
  }

  saveStatus(id, status) {
    const db = this.load();
    /* eslint-disable no-param-reassign */
    db.projects.forEach((item) => {
      item.tasks.forEach((task) => {
        if (task.id === Number(id)) {
          task.done = status;
        }
      });
    });
    /* eslint-enable no-param-reassign */
    this.storage.setItem('data', JSON.stringify(db));
  }

  load() {
    try {
      return JSON.parse(this.storage.getItem('data'));
    } catch (e) {
      throw new Error('Invalid data');
    }
  }

  loadTaskId(name) {
    const db = this.load();
    try {
      const taskId = db.projects.filter((item) => item.name === name)[0].id;
      return taskId;
    } catch (e) {
      throw new Error('Invalid data');
    }
  }

  removeStorage() {
    this.storage.clear();
  }
}
