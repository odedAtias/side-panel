interface Props {
	priority: number;
}

// Chip component
const Chip = ({priority}: Props) => {
	const map: {[key: number]: string} = {
		1: 'Critical',
		2: 'Hard',
		3: 'Medium',
	};

	const className = map[priority]?.toLowerCase() || '';

	return <div className={className}>{map[priority]}</div>;
};

export default Chip;
