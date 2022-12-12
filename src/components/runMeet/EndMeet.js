import React from 'react';
import { runMeet } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import DiverDisplay from './rm-comp/DiverDisplay';
import { nanoid } from 'nanoid';

const EndMeet = () => {
	const meetRun = useRecoilValue(runMeet);
	const diver = meetRun.divers;

	return (
		<div className='EM-wrapper'>
			<h1>Meet End</h1>
			<div className='EM-DD-wrap'>
				{diver.map((d, index) => (
					<DiverDisplay key={nanoid()} thisDiver={d} index={index} />
				))}
			</div>
		</div>
	);
};

export default EndMeet;
