const debounce = (fn, delay) => {
	let inDebounce;
	return () => {
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => fn.call(this), delay);
	};
};

export default debounce;
