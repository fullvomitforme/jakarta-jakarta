// Component Button
function Button({ children, variant }) {
	const buttonClass =
		variant === 'secondary'
			? 'h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 w-full hover:bg-slate-300'
			: 'h-10 px-6 font-semibold rounded-md bg-black text-white w-full hover:bg-slate-800';

	return <button className={buttonClass}>{children}</button>;
}

export default Button;
