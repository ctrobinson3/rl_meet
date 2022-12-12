import React from 'react';

const Input = ({ index, score }) => {
	return (
		<div className='sd-judge-input'>
			<div className='sd-input-display'>
				<h2>Judge {index + 1}</h2>
				<h3 className='sd-score'>Score: {score}</h3>
			</div>
		</div>
	);
};

export default Input;
