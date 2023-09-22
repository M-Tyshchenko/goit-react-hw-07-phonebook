export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterByName = state => state.filter.filter;

export const selectVisibleContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilterByName(state);

    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}

