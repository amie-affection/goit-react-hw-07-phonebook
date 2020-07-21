import { createSelector } from 'reselect';

export const getContactList = state = state.contactRoot.contacts;

export const isLoading = state => state.contactRoot.loading;

export const getError = state => state.contactRoot.contactError;

export const selector = createSelector();