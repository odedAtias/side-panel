// Custom components imports
import Aggregation from './Aggregation';
import Frame989 from './Frame989';

// Frame991 component
const Frame991 = () => {
	return (
		<div className='f-991'>
			<Aggregation value={80} />
			<Frame989
				total='191,103.12'
				fairValue='173,103.12'
				difference='173,103.12'
				variance='12'
			/>
		</div>
	);
};

export default Frame991;
