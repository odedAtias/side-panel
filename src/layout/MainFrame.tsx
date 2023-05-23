// React imports
import {ReactNode} from 'react';

// Props
interface Props {
	icon: ReactNode;
	title: string;
	items: {label: string; val: string; styled: boolean}[];
}

// MainFrame component
const MainFrame = ({title, items, icon}: Props) => {
	return (
		<div className='main-frame'>
			<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
				{icon}
				<p className='frame-title'>{title}</p>
			</div>
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
