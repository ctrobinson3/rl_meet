import React from 'react';

const Button = ({ score, handleClick }) => {
	return (
		<div className='sd-button' onClick={() => handleClick(score)}>
			{score}
		</div>
	);
};

export default Button;
