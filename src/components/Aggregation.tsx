interface Props {
	value: number;
}

// Aggregation component
const Aggregation = ({value}: Props) => {
	return (
		<div
			className='f-991-item'
			style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
		>
			<div className='aggregation'>{value}%</div>
		</div>
	);
};

export default Aggregation;
