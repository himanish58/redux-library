import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddBookSection from './AddBookSection';
import Book from './Book';
import './App.scss';

const App = ({ books, searchResults, showSearchResults }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(showSearchResults ? searchResults : books);
	}, [showSearchResults, searchResults, books]);

	return (
		<>
			<Header />
			<div className="books-container">
				{data.length ? (
					data.map((book) => <Book key={book.id} book={book} />)
				) : (
					<div className="blank-state">No Books</div>
				)}
			</div>
			<AddBookSection />
		</>
	);
};

const mapStateToProps = ({ books, searchResults, showSearchResults }) => ({
	books,
	searchResults,
	showSearchResults,
});

export default connect(mapStateToProps)(App);
