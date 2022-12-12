import React from 'react';
import { useRecoilValue } from 'recoil';
import { meetsQuery } from '../../recoil/atoms';
import '../../styles/meets.css';
import MeetOpt from './MeetOpt';

const MeetList = () => {
	const meets = useRecoilValue(meetsQuery);

	return (
		<div>
			<div className='meet-list'>
				{meets.meets.map((m) => (
					<MeetOpt key={m.id} meet={m} />
				))}
			</div>
		</div>
	);
};

export default MeetList;
