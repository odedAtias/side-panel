// Custom components imports
import Frame1017 from '../layout/Frame1017';
import Frame1018 from '../layout/Frame1018';
import MainFrame from '../layout/MainFrame';

// SidePanel
const SidePanel = () => {
	return (
		<div className='f-1011'>
			{/* 1018 */}
			<Frame1018 />
			{/* MainFrame */}
			<MainFrame />
			{/* MainFrame */}
			<MainFrame />
			{/* 1017 */}
			<Frame1017 />
		</div>
	);
};

export default SidePanel;
