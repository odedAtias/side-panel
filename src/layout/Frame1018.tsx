// Custom components imports
import Frame1012 from '../components/Frame1012';

// Frame1018 component
const Frame1018 = () => {
	return (
		<div className='f-1018'>
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='16' cy='16' r='15.5' stroke='#568793' />
				<path
					d='M14.7637 20L18.0364 16.4L14.7637 12.8'
					stroke='#568793'
					stroke-width='0.8'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>

			<Frame1012 />
		</div>
	);
};

export default Frame1018;
