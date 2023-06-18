import InputForm from '../elements/Input';
import Button from '../elements/Button/button';
import { useState } from 'react';
const FormLayout = () => {
	const [name, setName] = useState('Tazkiya');
	const [age, setAge] = useState(25);

	const handleClick = () => {
		setName('Nova Rosa');
		setAge(30);
	};

	return (
		<div className='w-full max-w-xs'>
			<h1 className='text-slate-900 text-3xl font-bold mb-2'>Login</h1>
			<p className='font-medium text-slate-500 mb-8'>
				Welcome, Please enter your detail! {name} and ik your age is {age} yo😆
			</p>
			<form action=''>
				<InputForm
					label='Email'
					type='email'
					name='email'
					placeholder='youremail@gmail.com'
				/>
				<InputForm
					label='Password'
					type='password'
					name='password'
					placeholder='**********'
				/>

				<Button variant='primary' onClick={handleClick}>
					Login
				</Button>
			</form>
			<button
				onClick={handleClick}
				className='mt-2 text-sm underline italic font'
			>
				Who are you?
			</button>
		</div>
	);
};

export default FormLayout;
