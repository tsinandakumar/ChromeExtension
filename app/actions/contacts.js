import * as types from '../constants/ActionTypes';

export function addContact(data) {
  return { type: types.ADD_CONTACT, data };
}

export function deleteContact(id) {
  return { type: types.DELETE_CONTACT, id };
}

// export function editContact(id, text) {
//   return { type: types.EDIT_CONTACT, id, text };
// }

// export function completeContact(id) {
//   return { type: types.COMPLETE_CONTACT, id };
// }

// export function completeAll() {
//   return { type: types.COMPLETE_ALL };
// }

// export function clearCompleted() {
//   return { type: types.CLEAR_COMPLETED };
// }
