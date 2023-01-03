import React from 'react';

const Message = ({ variant, children }) => {
	return (
		<div
			className={`alert alert-${variant} d-flex align-items-center`}
			role='alert'
		>
			<div>{children}</div>
		</div>
	);
};

Message.defaultProps = {
	variant: 'info',
};

export default Message;
