// Custom components imports
import Badge from './Badge';

// Icons
import {MdOutlineOpenInNew} from 'react-icons/md';

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
			<MdOutlineOpenInNew
				style={{
					color: '#568793',
					width: '24px',
					height: '24px',
					cursor: 'pointer',
				}}
			/>
		</div>
	);
};

export default Frame1009;
