interface Props {
	items: {title: string; description: string}[];
}

// OrderedList component
const OrderedList = ({items}: Props) => (
	<>
		{items.map((item, index) => (
			<div key={index} className='li'>
				<div className='li-container'>
					<span className='li-index'>{index + 1}</span>
					<p className='li-title'>{item.title}</p>
				</div>
				<p className='li-description'>{item.description}</p>
			</div>
		))}
	</>
);

export default OrderedList;
