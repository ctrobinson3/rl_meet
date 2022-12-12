import React, { useState } from 'react';
import ScoreDisplay from './ScoreDisplay';
import { scoreAtom, totalAtom } from './rm-recoil/rm-atoms';
import { useRecoilState } from 'recoil';

const JudgesScores = ({ currDive, setDiveScore, handleDelete }) => {
	const [score, setScore] = useRecoilState(scoreAtom);
	const [total, setTotal] = useRecoilState(totalAtom);
	const judgeAmt = 3;

	const diveDD = parseFloat(currDive);

	const handleSubmit = () => {
		if (score.length == 3) {
			let totes = 0;
			for (let i = 0; i < score.length; i++) {
				let curr = score[i];
				totes += curr;
			}
			let rawTotal = totes * currDive;
			const fixedTotal = (t) => {
				return t.toFixed(2);
			};
			setDiveScore({ ['total']: fixedTotal(rawTotal), ['scores']: score });
			setTotal(fixedTotal(rawTotal));
		}
	};

	return (
		<div className='judgesscores-wrap'>
			<div className='score-display-wrap'>
				<ScoreDisplay
					setScore={setScore}
					score={score}
					judgeAmt={judgeAmt}
					handleSubmit={handleSubmit}
					handleDelete={handleDelete}
				/>
				<div className='sd-total-score'>Dive Score: {total}</div>
			</div>
		</div>
	);
};

export default JudgesScores;
