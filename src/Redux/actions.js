import {
	ADD_BOOK,
	EDIT_BOOK,
	SEARCH_BOOK,
	SHOW_SEARCH_RESULTS,
} from './constants';

export const addBook = (payload) => ({
	type: ADD_BOOK,
	payload,
});

export const editBook = (payload) => ({
	type: EDIT_BOOK,
	payload,
});

export const searchBook = (query) => ({
	type: SEARCH_BOOK,
	query,
});

export const showSearchResults = (value) => ({
	type: SHOW_SEARCH_RESULTS,
	value,
});
