import {styled} from '@mui/material';

// Props
interface Props {
	title: string;
	items: {label: string; val: string; styled: boolean}[];
}

// MainFrame component
const MainFrame = ({title, items}: Props) => {
	return (
		<div className='main-frame'>
			<div className='main-frame-title'>{title}</div>
			<hr color='#F0F0F0' />
			<div className='main-frame-list-items'>
				{items.map((item, index) => (
					<div key={index}>
						<p className='key'>{item.label}</p>
						<p className={item.styled ? 'val styled' : 'val'}>{item.val}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MainFrame;
