import React, { useState } from 'react';
import AddEditBookForm from './AddEditBookForm';

const AddBookSection = () => {
	const [showForm, setShowForm] = useState(false);
	const addClickHandler = () => setShowForm(true);
	const cancelClickHandler = () => setShowForm(false);
	return showForm ? (
		<AddEditBookForm cancelClickHandler={cancelClickHandler} />
	) : (
		<div className="add-book" onClick={addClickHandler}>
			<div>Add Book +</div>
		</div>
	);
};

export default AddBookSection;
