import { createSelector } from "@reduxjs/toolkit";

import { selectSearchTerm } from "../filters/selectors.js";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchTerm],
  (contacts, searchTerm) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
);

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.loading;
