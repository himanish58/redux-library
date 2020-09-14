import {
	ADD_BOOK,
	EDIT_BOOK,
	SEARCH_BOOK,
	SHOW_SEARCH_RESULTS,
} from './constants';

const initialState = {
	books: [],
	searchResults: [],
	showSearchResults: false,
};

const rootReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case ADD_BOOK:
			newState.books = [...newState.books, action.payload];
			break;
		case EDIT_BOOK:
			newState.books = newState.books.map((book) => {
				if (book.id === action.payload.id) {
					return action.payload;
				} else return book;
			});
			newState.searchResults = newState.searchResults.map((book) => {
				if (book.id === action.payload.id) {
					return action.payload;
				} else return book;
			});
			break;
		case SEARCH_BOOK:
			const { query } = action;
			newState.searchResults = newState.books.filter(
				({ title, description, author }) =>
					title.toLowerCase().includes(query) ||
					description.toLowerCase().includes(query) ||
					author.toLowerCase().includes(query)
			);
			break;
		case SHOW_SEARCH_RESULTS:
			newState.showSearchResults = action.value;
			break;
		default:
			break;
	}
	return newState;
};

export default rootReducer;
