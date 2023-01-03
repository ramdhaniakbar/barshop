import React from 'react';

const Message = ({ variant, children }) => {
	return (
		<div
			class={`alert alert-${variant} d-flex align-items-center`}
			role='alert'
		>
			<div>{children}</div>
		</div>
	);
};

Message.defaultProps = {
	variant: 'alert-info',
};

export default Message;
