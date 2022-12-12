import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentJudge } from './rm-recoil/rm-atoms';
import '../../styles/scorebox.css';
import Button from './rm-comp/Button';
import Input from './rm-comp/Input';

const ScoreDisplay = ({
	score,
	judgeAmt,
	setScore,
	handleSubmit,
	handleDelete,
}) => {
	const [currJudge, setCurrJudge] = useRecoilState(currentJudge);
	const judgesScores = [];

	for (let i = 0; i < judgeAmt; i++) {
		let thisScore = score[i];
		judgesScores.push(<Input key={i} index={i} score={thisScore} />);
	}

	const handleScore = (val) => {
		if (currJudge <= judgeAmt) {
			let s = parseFloat(val);
			setScore((oldArr) => [...oldArr, s]);
			setCurrJudge(currJudge + 1);
		}
	};

	return (
		<div className='score-display'>
			<div className='sc-display'>
				<div className='sd-judges'>{judgesScores}</div>
				<div className='score-btns'>
					<div className='sd-row'>
						<Button score='0' handleClick={handleScore} />
						<Button score='1' handleClick={handleScore} />
						<Button score='2' handleClick={handleScore} />
						<Button score='3' handleClick={handleScore} />
						<Button score='4' handleClick={handleScore} />
						<Button score='5' handleClick={handleScore} />
						<Button score='6' handleClick={handleScore} />
						<Button score='7' handleClick={handleScore} />
						<Button score='8' handleClick={handleScore} />
						<Button score='9' handleClick={handleScore} />
						<Button score='10' handleClick={handleScore} />
					</div>
					<div className='sd-row'>
						<Button score='0.5' handleClick={handleScore} />
						<Button score='1.5' handleClick={handleScore} />
						<Button score='2.5' handleClick={handleScore} />
						<Button score='3.5' handleClick={handleScore} />
						<Button score='4.5' handleClick={handleScore} />
						<Button score='5.5' handleClick={handleScore} />
						<Button score='6.5' handleClick={handleScore} />
						<Button score='7.5' handleClick={handleScore} />
						<Button score='8.5' handleClick={handleScore} />
						<Button score='9.5' handleClick={handleScore} />
						<div className='sd-button sd-back' onClick={handleDelete}>
							BACK
						</div>
					</div>
					<div className='sd-submit' onClick={handleSubmit}>
						Submit Score
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScoreDisplay;
