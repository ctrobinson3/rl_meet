import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedMeet } from '../../recoil/atoms';

const MeetOpt = (meet) => {
	const info = meet.meet;
	const [thisMeet, setThisMeet] = useRecoilState(selectedMeet);

	const onMeetSelect = () => {
		setThisMeet(info);
	};

	return (
		<li className='meet-opt' onClick={onMeetSelect}>
			<Link to='/openmeet'>
				<header>
					<h1>{info.name}</h1>
					<h3>{info.date}</h3>
				</header>
				<div className='meet-body'>
					<p>{info.event}</p>
					<p>Divers: {info.divers.length}</p>
				</div>
			</Link>
		</li>
	);
};

export default MeetOpt;
