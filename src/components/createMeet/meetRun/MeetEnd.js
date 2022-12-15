import React from 'react';
import { useRecoilValue } from 'recoil';
import { addedDiversAtom } from '../cmRecoil/cmAtoms';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import DiversDisplay from './DiversDisplay';

const MeetEnd = () => {
	const divers = useRecoilValue(addedDiversAtom);

	const goHome = () => {};

	return (
		<div className='me-wrap'>
			<h1>Meet Ended</h1>
			<div className='EM-DD-wrap'>
				{divers.map((d, index) => (
					<DiversDisplay key={nanoid()} thisDiver={d} index={index} />
				))}
			</div>
			<div className='me-foot'>
				<Link className='me-home-btn' to='/'>
					Home
				</Link>
			</div>
		</div>
	);
};

export default MeetEnd;
