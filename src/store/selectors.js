import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = state => state.contacts.contacts;
export const selectorLoading = state => state.contacts.loading;
export const selectorError = state => state.contacts.error;
export const selectorFilter = state => state.filter.filter;

export const selectorVisibleContacts = createSelector(
    [selectorContacts, selectorFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)