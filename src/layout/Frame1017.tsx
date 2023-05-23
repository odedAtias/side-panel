// Custom components imports
import OrderedList from '../components/OrderedList';

// Icons
import {RiErrorWarningFill} from 'react-icons/ri';

// Frame1017 props
interface Props {
	title: string;
	items: {title: string; description: string; praiority: number}[];
}

// Frame1017
const Frame1017 = ({title, items}: Props) => {
	return (
		<div>
			<div style={{display: 'flex', gap: '8px'}}>
				<RiErrorWarningFill
					style={{width: '24px', height: '24px', color: '#EB5757'}}
				/>
				<div className='frame-title'>{title}</div>
			</div>
			<hr color='#F0F0F0' />
			<OrderedList items={items} />
		</div>
	);
};

export default Frame1017;
