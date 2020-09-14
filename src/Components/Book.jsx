import React, { useState } from 'react';
import AddEditBookForm from './AddEditBookForm';

const Book = ({ book: { id, title, description, author, count } }) => {
	const [showForm, setShowForm] = useState(false);
	const editClickHandler = () => setShowForm(true);
	const cancelClickHandler = () => setShowForm(false);

	return showForm ? (
		<AddEditBookForm
			{...{ id, title, description, author, count }}
			cancelClickHandler={cancelClickHandler}
		/>
	) : (
		<div className="book">
			<div className="row">
				<span className="title">ID: </span>
				{id}
			</div>
			<div className="row">
				<span className="title">Title: </span>
				{title}
			</div>
			<div className="row">
				<span className="title">Description: </span>
				{description}
			</div>
			<div className="row">
				<span className="title">Author: </span>
				{author}
			</div>
			<div className="row">
				<span className="title">Count: </span>
				{count}
			</div>
			<button className="edit-btn" onClick={editClickHandler}>
				Edit
			</button>
		</div>
	);
};

export default Book;
