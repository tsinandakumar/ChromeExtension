chrome.storage.local.get('contacts', (obj) => {
  let contacts = obj.contacts;
  if (contacts) {
    contacts = JSON.parse(contacts);
    const len = contacts.filter(contact => !contact.marked).length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '1' });
  }
});
