const selectContact = state => state.contacts;

const selectContacts = state => state.contacts.items;

export const contactsSelectors = {
  selectContact,
  selectContacts,
};
