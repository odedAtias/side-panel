// Custom components imports
import Frame1017 from '../layout/Frame1017';
import Frame1018 from '../layout/Frame1018';
import MainFrame from '../layout/MainFrame';

// SidePanel
const SidePanel = () => {
	const generalInfo = [
		{label: 'Invoice number', val: 'HG-2659874113', styled: false},
		{label: 'Contract', val: 'HG-2659874113', styled: true},
	];
	const operationalData = [
		{label: 'Created At', val: '13.02.2022', styled: false},
		{label: 'Created By', val: 'Lior', styled: false},
		{label: 'Operation Date', val: '04.11.2021', styled: false},
		{label: 'Invoice number', val: 'HG-2659874113', styled: false},
		{label: 'Event', val: 'Transportation', styled: true},
		{label: 'Service', val: 'Shop2Address', styled: true},
		{label: 'Transmission', val: 'Transmission-sgewwoes2i', styled: true},
		{label: 'Transaction', val: '4ayk2mui8m', styled: true},
		{label: 'Transmission Type', val: 'No value found', styled: true},
	];
	return (
		<div className='f-1011'>
			{/* 1018 */}
			<Frame1018 />
			{/* MainFrame */}
			<MainFrame title='General Info' items={generalInfo} />
			{/* MainFrame */}
			<MainFrame title='Operational Data' items={operationalData} />
			{/* 1017 */}
			<Frame1017 />
		</div>
	);
};

export default SidePanel;
