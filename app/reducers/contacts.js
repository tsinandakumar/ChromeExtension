import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

const actionsMap = {
  
  [ActionTypes.ADD_CONTACT](state, action) {
    debugger
    return [{
      id: state.reduce((maxId, contact) => Math.max(contact.id, maxId), -1) + 1,
      completed: false,
      name: action.data.name,
      email: action.data.email
    }, ...state];
  },
  [ActionTypes.DELETE_CONTACT](state, action) {
    return state.filter(contact =>
      contact.id !== action.id
    );
  },
  [ActionTypes.EDIT_CONTACT](state, action) {
    return state.map(contact =>
      (contact.id === action.id ?
        Object.assign({}, contact, { name: action.data.name,
          email: action.data.email }) :
        contact)
    );
  },
  [ActionTypes.COMPLETE_CONTACT](state, action) {
    return state.map(contact =>
      (contact.id === action.id ?
        Object.assign({}, contact, { completed: !contact.completed }) :
        contact)
    );
  },
  [ActionTypes.COMPLETE_ALL](state/*, action*/) {
    const areAllCompleted = state.every(contact => contact.completed);
    return state.map(contact => Object.assign({}, contact, {
      completed: !areAllCompleted
    }));
  },
  [ActionTypes.CLEAR_COMPLETED](state/*, action*/) {
    return state.filter(contact => contact.completed === false);
  }
};

export default function contacts(state = initialState, action) { 
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
