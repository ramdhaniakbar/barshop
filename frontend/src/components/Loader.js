import React from 'react';

const Loader = () => {
	return (
		<div class='d-flex justify-content-center'>
			<div
				class='spinner-border'
				style={{ width: '5rem', height: '5rem' }}
				role='status'
			>
				<span class='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
