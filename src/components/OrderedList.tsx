// Custom components imports
import Chip from './Chip';

// OrderedList Props
interface Props {
	items: {title: string; description: string; praiority: number}[];
}

// OrderedList component
const OrderedList = ({items}: Props) => (
	<>
		{items.map((item, index) => (
			<div key={index} className='li'>
				<div>
					<div className='li-container'>
						<span className='index'>{index + 1}</span>
						<p className='li-title'>{item.title}</p>
					</div>
					<p className='li-description'>{item.description}</p>
				</div>
				<div className='li-chip'>
					<Chip priority={item.praiority} />
				</div>
			</div>
		))}
	</>
);

export default OrderedList;
