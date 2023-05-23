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

	const exception = [
		{
			title: 'Missing data',
			description: 'Missing Priority Shipment Data',
			praiority: 1,
		},
		{
			title: 'No pricing',
			description:
				'26 PLL To Sweden; Original Charge (€1,750.00) Is Above The Approximate Price (€1,539.00) For 26 PLL; 20 PLL (€1,485.00), Approximate Cost Per PLL (€9.00); (Including A Threshold Of 1%/€20.00)',
			praiority: 2,
		},
		{
			title: 'Title',
			description: 'Might Be Dedicated Truck',
			praiority: 3,
		},
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
			<Frame1017 title='Exception' items={exception} />
		</div>
	);
};

export default SidePanel;
