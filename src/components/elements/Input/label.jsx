const Label = ({ htmlFor, children }) => {
	return (
		<label
			htmlFor={htmlFor}
			className='block text-slate-700 text-sm font-bold b-2 mb-2'
		>
			{children}
		</label>
	);
};

export default Label;
