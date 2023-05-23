import React from 'react';

interface Props {
	children: string;
	bgColor: string;
}

const Badge = ({children, bgColor}: Props) => {
	return (
		<div
			style={{
				background: bgColor,
				color: 'white',
				fontSize: '10.8px',
				width: '96px',
				height: '24px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '20px',
				paddingLeft: '9.6px',
				paddingRight: '9.6px',
			}}
		>
			{children}
		</div>
	);
};

export default Badge;
