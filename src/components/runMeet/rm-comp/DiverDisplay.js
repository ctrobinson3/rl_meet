import React, { useState } from 'react';
import { runMeet } from '../../../recoil/atoms';
import { meetAtom } from '../rm-recoil/rm-atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import DivesDisplay from './DivesDisplay';
import { nanoid } from 'nanoid';

const DiverDisplay = ({ thisDiver, index }) => {
	const meetRun = useRecoilValue(runMeet);
	const [meetData, setMeetData] = useRecoilState(meetAtom);
	const id = thisDiver.id;
	const diveArr = thisDiver.dives;
	console.log(thisDiver);

	const calcTotal = () => {
		let rawTotal = 0;
		for (let i = 0; i < meetData.length; i++) {
			let thisDive = meetData[i];
			let diveId = thisDive.id;
			let diveTotal = parseFloat(thisDive.total);
			if (diveId == id) {
				rawTotal += diveTotal;
			}
		}
		const fixedTotal = (t) => {
			return t.toFixed(2);
		};
		return fixedTotal(rawTotal);
	};

	const theseDives = () => {
		let diveArray = [];
		for (let i = 0; i < meetData.length; i++) {
			let thisDive = meetData[i];
			let diveId = thisDive.id;
			if (diveId == id) {
				diveArray.push(thisDive);
			}
		}
		return diveArray;
	};

	return (
		<div className='EM-divers'>
			<h1>{thisDiver.name}</h1>
			<p>{thisDiver.school}</p>
			<h3>Final Score: {calcTotal()}</h3>
			<div className='EM-dives'>
				<b>
					Dives:
					{diveArr.map((d, index) => (
						<DivesDisplay
							key={nanoid()}
							index={index}
							thisDive={d}
							diveArray={theseDives()}
						/>
					))}
				</b>
			</div>
		</div>
	);
};

export default DiverDisplay;
