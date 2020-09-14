import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addBook, editBook } from '../Redux/actions';

const AddEditBookForm = ({
	id,
	title,
	description,
	author,
	count,
	cancelClickHandler,
	addBook,
	editBook,
}) => {
	const titleRef = useRef(null);
	const descRef = useRef(null);
	const authorRef = useRef(null);
	const countRef = useRef(null);
	const submitClickHandler = (e) => {
		e.stopPropagation();
		e.preventDefault();
		const payload = {
			title: titleRef.current.value,
			description: descRef.current.value,
			author: authorRef.current.value,
			count: countRef.current.value,
		};
		if (id) {
			payload.id = id;
			editBook(payload);
		} else {
			payload.id = new Date().getTime();
			addBook(payload);
		}
		cancelClickHandler();
	};
	return (
		<form onSubmit={submitClickHandler}>
			{id && (
				<div className="row">
					<span className="label">ID: </span>
					{id}
				</div>
			)}
			<label htmlFor="title">Title</label>
			<input
				type="text"
				ref={titleRef}
				required
				placeholder="Type Title..."
				id="title"
				defaultValue={title}
			/>
			<label htmlFor="desc">Description</label>
			<input
				type="text"
				ref={descRef}
				required
				placeholder="Type Description..."
				id="desc"
				defaultValue={description}
			/>
			<label htmlFor="author">Author Name</label>
			<input
				type="text"
				ref={authorRef}
				required
				placeholder="Type Author Name..."
				id="author"
				defaultValue={author}
			/>
			<label htmlFor="count">Count</label>
			<input
				type="number"
				ref={countRef}
				required
				placeholder="Type Count..."
				id="count"
				defaultValue={count}
			/>
			<div className="btn-section">
				<button
					type="button"
					className="cancel-btn"
					onClick={cancelClickHandler}>
					Cancel
				</button>
				<button type="submit" className="submit-btn">
					Submit
				</button>
			</div>
		</form>
	);
};

const mapDispatchToProps = {
	addBook: addBook,
	editBook: editBook,
};
export default connect(null, mapDispatchToProps)(AddEditBookForm);
