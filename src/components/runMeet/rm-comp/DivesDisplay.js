import React from 'react';

const DivesDisplay = ({ thisDive, index, diveArray }) => {
	console.log(thisDive);
	console.log(index);
	console.log(diveArray);
	const currDive = diveArray[index];
	const currScores = currDive.scores;
	const currTotal = currDive.total;

	return (
		<div>
			<p>
				{index + 1}: {thisDive.dive}
			</p>
			<p className='score-display'>
				Scores:{' '}
				{currScores.map((s) => (
					<p className='single-score'>{s}</p>
				))}
			</p>
			<p>Dive Total: {currTotal}</p>
		</div>
	);
};

export default DivesDisplay;
