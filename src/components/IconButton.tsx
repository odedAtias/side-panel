import {ReactNode} from 'react';

// Props
interface Props {
	children: ReactNode;
}

// IconButton
const IconButton = ({children}: Props) => {
	return <>{children}</>;
};

export default IconButton;
