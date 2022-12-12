import React from 'react';
import ScoreDisplay from './ScoreDisplay';

const DiveReturn = ({ i, dive }) => {
	const thisDive = dive[i];
	const thisScore = thisDive.scores;
	const getNet = () => {
		let net = 0;
		for (let i = 0; i < thisScore.length; i++) {
			let score = thisScore[i];
			net += score;
		}
		return net;
	};

	const getTotal = () => {
		let round = i;
		let d = dive;
		let tot = 0;
		for (let i = 0; i <= round; i++) {
			let dive = d[i];
			let t = dive.total;
			tot += t;
		}
		return tot;
	};

	const judgesScores = [];
	for (let i = 0; i < 7; i++) {
		judgesScores.push(<ScoreDisplay score={thisScore} key={i} i={i} />);
	}
	return (
		<div className='score-row'>
			<div className='score-judge'>{i + 1}</div>
			<div className='score-dive'>{thisDive.num}</div>
			<div className='score-desc'>{thisDive.name}</div>
			<div className='score-pos'>{thisDive.pos}</div>
			<div className='score-dd'>{thisDive.dd}</div>
			<div className='score-judges'>{judgesScores}</div>
			<div className='score-net'>{getNet()}</div>
			<div className='score-total'>
				<div className='st-col'>
					<b>Dive: </b>
					{thisDive.total}
				</div>
				<div className='st-col'>
					<b>Total: {getTotal()}</b>
				</div>
			</div>
		</div>
	);
};

export default DiveReturn;
