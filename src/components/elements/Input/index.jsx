import Label from './label';
import Input from './input';
const InputForm = ({ label, type, name, placeholder }) => {
	return (
		<div className='mb-6'>
			<Label htmlFor={name}>{label}</Label>
			<Input type={type} name={name} placeholder={placeholder} />
		</div>
	);
};

export default InputForm;
