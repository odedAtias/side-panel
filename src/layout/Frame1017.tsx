// Custom components imports
import OrderedList from '../components/OrderedList';

// Frame1017 props
interface Props {
	title: string;
	items: {title: string; description: string}[];
}

// Frame1017
const Frame1017 = ({title, items}: Props) => {
	return (
		<div>
			<div className='frame-title'>{title}</div>
			<hr color='#F0F0F0' />
			<OrderedList items={items} />
		</div>
	);
};

export default Frame1017;
