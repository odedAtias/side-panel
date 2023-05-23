// Custom components imports
import IconButton from './IconButton';
import Badge from './Badge';

interface Props {
	title: string;
}

// Frame991 component
const Frame1009 = ({title}: Props) => {
	return (
		<div className='f-1009'>
			{/* Title & Badge */}
			<div className='f-765'>
				<p className='f-765-title'>{title}</p>
				<Badge bgColor='#ECC631'>Pending</Badge>
			</div>
			{/* Icon Button */}
			<div>
				<IconButton />
			</div>
		</div>
	);
};

export default Frame1009;
