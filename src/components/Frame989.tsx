interface Props {
	total: string;
	fairValue: string;
	difference: string;
	variance: string;
}

// Frame989 component
const Frame989 = ({total, fairValue, difference, variance}: Props) => {
	return (
		<div className='f-991-item' style={{width: '100%'}}>
			<div className='f-989'>
				<div className='totalTitle'>
					<p>icon</p>
					<p style={{color: '#8B9092', fontSize: '11px'}}>Total title</p>
				</div>
				<div className='summarize'>
					{/* Total */}
					<div className='f-989-item'>
						<p className='val'>{total}</p>
						<p className='key'>Total</p>
					</div>
					{/* Fair value */}
					<div className='f-989-item'>
						<p className='val'>{fairValue}</p>
						<p className='key'>Fair value</p>
					</div>
					{/* Difference */}
					<div className='f-989-item'>
						<p className='val'>{difference}</p>
						<p className='key'>Difference</p>
					</div>
					{/* Variance */}
					<div className='f-989-item'>
						<p className='val'>{variance}</p>
						<p className='key'>Variance</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frame989;
