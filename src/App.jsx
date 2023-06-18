import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';

// Component Image
// function Media({ src, alt }) {
// 	return (
// 		<img
// 			src={src}
// 			alt={alt}
// 			className='absolute inset-0 w-full h-full object-cover'
// 			loading='lazy'
// 		/>
// 	);
// }

// // Component Header
// function Header({ children }) {
// 	return (
// 		<h1 className='flex-auto text-lg font-semibold text-slate-900 '>
// 			{children}
// 		</h1>
// 	);
// }

// // Component Price
// function Price({ children }) {
// 	return <div className='text-lg font-semibold text-slate-500'>{children}</div>;
// }

// // Component Stock
// function Stock({ isStock }) {
// 	// if (isStock) {
// 	// 	return (
// 	// 		<>
// 	// 			<div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
// 	// 				In Stock
// 	// 			</div>
// 	// 		</>
// 	// 	);
// 	// }
// 	// return (
// 	// 	<>
// 	// 		<div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
// 	// 			Out of Stock
// 	// 		</div>
// 	// 	</>
// 	// );

// 	return (
// 		<div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
// 			{isStock ? 'In Stock' : 'Out of Stock'}
// 		</div>
// 	);
// }

// // Component Label
// // function Label({ children }) {
// // 	return (
// // 		<label>
// // 			<input
// // 				className='sr-only peer'
// // 				name='size'
// // 				type='radio'
// // 				value='xs'
// // 				checked
// // 			/>
// // 			<div class='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
// // 				{children}
// // 			</div>
// // 		</label>
// // 	);
// // }

// function Favorite() {
// 	return (
// 		<button
// 			className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
// 			type='button'
// 			ariaLabel='Like'
// 		>
// 			<svg width='20' height='20' fill='currentColor' ariaHidden='true'>
// 				<path
// 					fillRule='evenodd'
// 					clipRule='evenodd'
// 					d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
// 				/>
// 			</svg>
// 		</button>
// 	);
// }

function App() {
	return (
		<>
			<Navbar />
			<Home />
		</>
		// <div>
		// 	<div className='flex font-sans'>
		// 		<div className='flex-none w-48 relative'>
		// 			<Media src={logo} alt='Classic Utility Jacket'></Media>
		// 		</div>
		// 		<form className='flex-auto p-6'>
		// 			<div className='flex flex-wrap'>
		// 				<Header>Classic Utility Jacket</Header>
		// 				<Price>$110.00</Price>
		// 				<Stock isStock={true}></Stock>
		// 			</div>
		// 			<div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200'>
		// 				<div className='space-x-2 flex text-sm'>
		// 					<Label>XS</Label>
		// 					<Label>S</Label>
		// 					<Label>M</Label>
		// 					<Label>L</Label>
		// 					<Label>XL</Label>
		// 				</div>
		// 			</div>
		// 			<div className='flex space-x-4 mb-6 text-sm font-medium'>
		// 				<div className='flex-auto flex space-x-4'>
		// 					<Button variant={'primary'}>Buy now</Button>
		// 					<Button variant={'secondary'}>Add to bag</Button>
		// 				</div>
		// 				<Favorite></Favorite>
		// 			</div>
		// 			<p className='text-sm text-slate-700'>
		// 				Free shipping on all continental US orders
		// 			</p>
		// 		</form>
		// 	</div>
		// </div>

		// <div className='flex justify-center min-h-screen items-center'>
		// 	<FormLayout></FormLayout>
		// </div>
	);
}

export default App;
