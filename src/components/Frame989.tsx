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
					{/* Icon  */}
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='10' cy='10' r='9.5' stroke='#568793' />
						<path
							d='M11.5625 6.35419H8.4375L10.8929 9.71957L8.4375 13.125H11.5625'
							stroke='#568793'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<p style={{color: '#8B9092', fontSize: '11px'}}>Total title</p>
				</div>
				<div className='summarize'>
					{/* Total */}
					<div className='f-989-item'>
						<p className='val' style={{fontWeight: 'bold'}}>
							${total}
						</p>
						<p className='key'>Total</p>
					</div>
					{/* Fair value */}
					<div className='f-989-item'>
						<p className='val' style={{fontWeight: 'bold'}}>
							${fairValue}
						</p>
						<p className='key'>Fair value</p>
					</div>
					{/* Difference */}
					<div className='f-989-item'>
						<p className='val' style={{fontWeight: 'bold'}}>
							${difference}
						</p>
						<p className='key'>Difference</p>
					</div>
					{/* Variance */}
					<div className='f-989-item'>
						<p className='val' style={{fontWeight: 'bold'}}>
							{variance}%
						</p>
						<p className='key'>Variance</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frame989;
