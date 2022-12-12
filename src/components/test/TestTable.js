import React from 'react';
import '../../styles/table.css';
import JudgeScore from './test-table/JudgeScore';
import DiveReturn from './test-table/DiveReturn';

const TestTable = () => {
	const diver = {
		name: 'CT Robinson',
		school: 'Silver Creek',
		date: 'Feb. 2, 2022',
		meet: '4A State Meet',
		event: 'Boys 1-meter',
		coach: 'Shawn Gregg',
	};
	const dive = [
		{
			name: 'Front Dive',
			dd: 1.2,
			num: '101c',
			pos: 'T',
			scores: [7, 7, 6.5],
			total: 24.6,
		},
		{
			name: 'Front 1.5 SS, 2 Tw',
			dd: 2.6,
			num: '5134d',
			pos: 'F',
			scores: [7.5, 7.5, 7.5],
			total: 58.5,
		},
	];

	const judgeRow = [];
	for (let i = 0; i < 7; i++) {
		judgeRow.push(<JudgeScore key={i} i={i + 1} />);
	}

	const diveRow = [];
	for (let i = 0; i < 2; i++) {
		diveRow.push(<DiveReturn dive={dive} key={i} i={i} />);
	}

	const scoreTotal = () => {
		let t = 0;
		for (let i = 0; i < dive.length; i++) {
			let d = dive[i];
			let tot = d.total;
			t += tot;
		}
		return t;
	};

	return (
		<div className='table-wrap'>
			<div className='table-container'>
				<div className='table-head'>
					<div className='head-side'>
						<div className='head-entry'>
							<b>Name: </b> <p className='head-info'>{diver.name}</p>
						</div>
						<div className='head-entry'>
							<b>School: </b> <p className='head-info'>{diver.school}</p>
						</div>
						<div className='head-entry'>
							<b>Coach: </b> <p className='head-info'>{diver.coach}</p>
						</div>
					</div>
					<div className='head-side'>
						<div className='head-entry'>
							<b>Meet: </b> <p className='head-info'>{diver.meet}</p>
						</div>
						<div className='head-entry'>
							<b>Date: </b> <p className='head-info'>{diver.date}</p>
						</div>
						<div className='head-entry'>
							<b>Event: </b> <p className='head-info'>{diver.event}</p>
						</div>
					</div>
				</div>
				<div className='dives-wrap'>
					<div className='dives-header'>
						<div className='dh-blank' />
						<div className='dh-dive'>Dive</div>
						<div className='dh-desc'>Description</div>
						<div className='dh-pos'>Pos.</div>
						<div className='dh-dd'>DD</div>
						<div className='dh-judges'>{judgeRow}</div>
						<div className='dh-net'>Net</div>
						<div className='dh-total'>Total</div>
					</div>
					<div className='dives-scores'>{diveRow}</div>
					<div className='score-total-wrap'>
						<b>Official Score: {scoreTotal()}</b>
					</div>
				</div>
				<div className='signatures-wrap'>
					<div className='signature'>
						<hr />
						<p>Diver's Signature</p>
					</div>

					<div className='signature'>
						<hr />
						<p>Coach's Signature</p>
					</div>

					<div className='signature'>
						<hr />
						<p>Referee's Signature</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestTable;
