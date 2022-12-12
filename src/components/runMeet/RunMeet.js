import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { runMeet } from '../../recoil/atoms';
import {
	currentJudge,
	meetAtom,
	scoreAtom,
	totalAtom,
} from './rm-recoil/rm-atoms';
import JudgesScores from './JudgesScores';

const RunMeet = () => {
	const [meetData, setMeetData] = useRecoilState(meetAtom);
	const [currJudge, setCurrJudge] = useRecoilState(currentJudge);
	const [score, setScore] = useRecoilState(scoreAtom);
	const [total, setTotal] = useRecoilState(totalAtom);
	const [diveScore, setDiveScore] = useState(0);
	const meetRun = useRecoilValue(runMeet);
	const divers = meetRun.divers;
	const [roundNum, setRoundNum] = useState(0);
	const [diverOrder, setDiverOrder] = useState(0);
	const diver = divers[diverOrder];
	const id = diver.id;
	const dive = diver.dives[roundNum];
	const [meetEnd, setMeetEnd] = useState(false);

	const onDeck = (d) => {
		const firstDiver = divers[0];
		const nextDiver = divers[diverOrder + 1];

		if (d >= divers.length - 1) {
			return firstDiver.name;
		} else {
			return nextDiver.name;
		}
	};

	const endMeet = () => {
		console.log('meet endddddddddddddddddddddddddddddddded');
	};

	const onNextDiver = () => {
		setMeetData([
			...meetData,
			{ ['id']: id, ['scores']: score, ['total']: total },
		]);
		setCurrJudge(1);
		setScore([]);
		setTotal(0);
		if (diverOrder < divers.length - 1) {
			setDiverOrder(diverOrder + 1);
		} else {
			if (roundNum < meetRun.rounds - 1) {
				setRoundNum(roundNum + 1);
				setDiverOrder(0);
			}
		}
		if (diverOrder == divers.length - 1 && roundNum == meetRun.rounds - 1) {
			setMeetEnd(true);
		}
	};

	const handleDelete = () => {
		if (currJudge > 1) {
			let delNum = currJudge - 2;
			let newArr = [];
			for (let i = 0; i < delNum; i++) {
				let newScore = score[i];
				newArr.push(newScore);
			}
			setScore(newArr);
			setCurrJudge(currJudge - 1);
		}
	};

	const restart = () => {
		setMeetEnd(false);
		setRoundNum(0);
		setDiverOrder(0);
	};
	console.log(meetData);
	console.log(score);

	return (
		<div className='RM-wrap margin border'>
			<header className='RM-header center'>
				<h1>Run Meet</h1>
				<h1>{meetRun.name}</h1>

				<div className='line' />
				<h2>Round: {roundNum + 1}</h2>
				<h3>Current Diver: {diver.name}</h3>
				<h4>On Deck: {onDeck(diverOrder)}</h4>
			</header>
			<div className='RM-dive-box margin border center'>
				<div className='RM-DB-row'>
					<div className='RM-DB-box'>
						<h4>Dive Number</h4>
						<div className='line' />
					</div>
					<div className='RM-DB-box'>
						<h4>Dive Name</h4>
						<div className='line' />
					</div>
					<div className='RM-DB-box'>
						<h4>DD</h4>
						<div className='line' />
					</div>
				</div>
				<div className='RM-DB-row'>
					<div className='RM-DB-box'>
						<h4>{dive.dive}</h4>
					</div>
					<div className='RM-DB-box'>
						<h4>{dive.name}</h4>
					</div>
					<div className='RM-DB-box'>
						<h4>{dive.dd}</h4>
					</div>
				</div>
			</div>
			<div className='RM-judge-box center margin border'>
				<h3>Scores:</h3>
				<JudgesScores
					handleDelete={handleDelete}
					currDive={dive.dd}
					setDiveScore={setDiveScore}
				/>
			</div>
			<div className='RM-footer margin'>
				{meetEnd && (
					<Link to='/endmeet' className='RM-nxt-btn center red'>
						End Meet
					</Link>
				)}
				{!meetEnd && (
					<div className='RM-nxt-btn center' onClick={onNextDiver}>
						Next Diver
					</div>
				)}

				<div className='RM-nxt-btn center margin' onClick={restart}>
					restart
				</div>
			</div>
		</div>
	);
};

export default RunMeet;
