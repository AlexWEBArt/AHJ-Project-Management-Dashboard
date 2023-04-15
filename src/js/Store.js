import {
  Subject, startWith, scan, share,
} from 'rxjs';

export default class Store {
  constructor() {
    this.ACTIONS = {
      ClickOpenSelect: 'OPENSELECT',
      ClickCloseSelect: 'CLOSESELECT',
      ClickCompleteTask: 'COMPLETETASK',
      ClickOpenTask: 'OPENTASK',
    };
    this.actions$ = new Subject();
    this.stateSelect$ = this.actions$.asObservable().pipe(
      startWith({ type: 'INITIALIZATION' }),
      scan(
        (state, action) => this.reduce(state, action),
        {
          select: false,
          status: false,
          payload: null,
        },
      ),
      share(),
    );
  }

  reduce(state, action) {
    const { payload } = action;
    switch (action.type) {
      case this.ACTIONS.ClickOpenSelect:
        return { ...state, select: true };
      case this.ACTIONS.ClickCloseSelect:
        return { ...state, select: false };
      case this.ACTIONS.ClickCompleteTask:
        return { ...state, status: true, payload };
      case this.ACTIONS.ClickOpenTask:
        return { ...state, status: false, payload };
      default:
        return state;
    }
  }

  dispatch(type, payload = null) {
    this.actions$.next({ type, payload });
  }

  openSelect(value = null) {
    this.dispatch(this.ACTIONS.ClickOpenSelect, value);
  }

  closeSelect(value = null) {
    this.dispatch(this.ACTIONS.ClickCloseSelect, value);
  }

  completeTask(value = null) {
    this.dispatch(this.ACTIONS.ClickCompleteTask, value);
  }

  openTask(value = null) {
    this.dispatch(this.ACTIONS.ClickOpenTask, value);
  }
}
