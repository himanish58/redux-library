import React, { useRef } from 'react';
import { connect } from 'react-redux';
import debounce from '../Utils/debounce';
import { searchBook, showSearchResults } from '../Redux/actions';

const Header = ({ searchBook, showSearchResults }) => {
	const searchRef = useRef(null);
	const searchHandler = () => {
		const query = searchRef.current.value;
		if (query) {
			searchBook(query.toLowerCase());
			showSearchResults(true);
		} else {
			showSearchResults(false);
		}
	};
	return (
		<header>
			<h1>Library</h1>
			<input
				type="text"
				ref={searchRef}
				onChange={debounce(searchHandler, 300)}
				placeholder="Search by title, description or author name..."
			/>
		</header>
	);
};

const mapDispatchToProps = {
	searchBook,
	showSearchResults,
};

export default connect(null, mapDispatchToProps)(Header);
