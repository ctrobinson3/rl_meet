import React, { useState } from 'react';
import {
	addedDiversAtom,
	meetDataAtom,
	judgeAtom,
	diverScoreAtom,
	totalScoreAtom,
	roundAtom,
	netAtom,
	meetNameAtom,
} from '../cmRecoil/cmAtoms';
import { Link } from 'react-router-dom';
import JudgeScores from './JudgeScores';
import { useRecoilState, useRecoilValue } from 'recoil';

const MeetRun = () => {
	// entered info
	const divers = useRecoilValue(addedDiversAtom);

	// atoms
	const [meetData, setMeetData] = useRecoilState(meetDataAtom);
	const [currJudge, setCurrJudge] = useRecoilState(judgeAtom);
	const [scores, setScores] = useRecoilState(diverScoreAtom);
	const [total, setTotal] = useRecoilState(totalScoreAtom);
	const [net, setNet] = useRecoilState(netAtom);
	const [round, setRound] = useRecoilState(roundAtom);

	// states and variables
	const [diveScore, setDiveScore] = useState(0);
	const [diveOrder, setDiveOrder] = useState(0);
	const [meetEnd, setMeetEnd] = useState(false);
	const meetName = useRecoilValue(meetNameAtom);
	const currDiver = divers[diveOrder];
	const currDive = currDiver.diverDives[round];

	//functions
	const onNextDiver = () => {
		setMeetData([
			...meetData,
			{ ['id']: diveOrder, ['scores']: scores, ['total']: total, ['net']: net },
		]);
		setCurrJudge(1);
		setScores([]);
		setTotal(0);
		setNet(0);
		if (diveOrder < divers.length - 1) {
			setDiveOrder(diveOrder + 1);
		} else {
			if (round < 5) {
				setRound(round + 1);
				setDiveOrder(0);
			}
		}
		if (diveOrder == divers.length - 1 && round == 5) {
			setMeetEnd(true);
		}
	};

	const onDeck = (d) => {
		const firstDiver = divers[0];
		const nextDiver = divers[diveOrder + 1];

		if (d >= divers.length - 1) {
			return firstDiver.diverName;
		} else {
			return nextDiver.diverName;
		}
	};

	const handleDelete = () => {
		if (currJudge > 1) {
			let delNum = currJudge - 2;
			let newArr = [];
			for (let i = 0; i < delNum; i++) {
				let newScore = scores[i];
				newArr.push(newScore);
			}
			setScores(newArr);
			setCurrJudge(currJudge - 1);
		}
	};

	const restart = () => {
		setMeetEnd(false);
		setRound(0);
		setDiveOrder(0);
	};
	return (
		<div className='cm-meet-wrap'>
			<div className='cm-meet-head'>
				<div className='cm-meet-col'>
					<p className='cm-txt-b'>{meetName}</p>
					<p className='cm-txt-a'>Round: {round + 1}</p>
					<p className='cm-txt-a'>
						Diver: {diveOrder + 1} / {divers.length}{' '}
					</p>
				</div>
				<div className='cm-meet-col-b'>
					<div className='cm-txt-wrap'>
						<p className='cm-txt-c'>Current Diver:</p>
						<p className='cm-txt-d'>{currDiver.diverName}</p>
					</div>
				</div>
			</div>
			<div className='cm-diveinfo-wrap'>
				<div className='cm-di-row'>
					<div className='cm-di-box'>
						<p className='cm-txt-c'>Dive Number:</p>
						<p className='cm-txt-b'>
							{currDive.num}
							{currDive.letter}
						</p>
					</div>
					<div className='cm-di-box'>
						<p className='cm-txt-c'>Dive Name:</p>
						<p className='cm-txt-b'>
							{currDive.direction} {currDive.rotation} {currDive.position}
						</p>
					</div>
					<div className='cm-di-box'>
						<p className='cm-txt-c'>DD:</p>
						<p className='cm-txt-b'>{currDive.difficulty}</p>
					</div>
					<div className='cm-di-box'>
						<p className='cm-txt-c'>On Deck:</p>
						<p className='cm-txt-b'>{onDeck(diveOrder)}</p>
					</div>
				</div>
			</div>
			<div className='cm-judge-box'>
				<JudgeScores
					handleDelete={handleDelete}
					currDive={currDive.difficulty}
					setDiveScore={setDiveScore}
					next={onNextDiver}
					meetEnd={meetEnd}
				/>
			</div>
			<div className='RM-footer margin'>
				<div className='RM-nxt-btn center margin' onClick={restart}>
					restart
				</div>
			</div>
		</div>
	);
};

export default MeetRun;
