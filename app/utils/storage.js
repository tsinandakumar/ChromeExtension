function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// contacts unmarked count
function setBadge(contacts) {
  if (chrome.browserAction) {
    const count = contacts.filter(contact => !contact.marked).length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.contacts);
    });
    return store;
  };
}
