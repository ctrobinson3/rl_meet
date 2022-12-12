import React from 'react';
import {
	meetNameAtom,
	numJudgesAtom,
	addedDiversAtom,
} from '../cmRecoil/cmAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';

const MeetRun = () => {
	const divers = useRecoilValue(addedDiversAtom);
	const numJudges = useRecoilValue(numJudgesAtom);
	const meetName = useRecoilValue(meetNameAtom);

	console.log(divers, numJudges, meetName);

	return <div>MeetRun</div>;
};

export default MeetRun;
