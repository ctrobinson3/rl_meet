import React, { useState } from 'react';
import AddDiver from './AddDiver';
import DisplayDiver from './DisplayDiver';
import '../../styles/create.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	meetNameAtom,
	numJudgesAtom,
	addedDiversAtom,
} from './cmRecoil/cmAtoms';
import { Link } from 'react-router-dom';

const CreateMeet = () => {
	const [meetName, setMeetName] = useRecoilState(meetNameAtom);
	const [numJudges, setNumJudges] = useRecoilState(numJudgesAtom);
	const divers = useRecoilValue(addedDiversAtom);

	const onMeetNameInput = (e) => {
		setMeetName(e.target.value);
	};

	const onNumJudgesInput = (e) => {
		setNumJudges(e.target.value);
	};

	// modal
	const [openPasswordModal, setOpenPasswordModal] = useState(false);
	if (openPasswordModal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div className='cm-wrap'>
			<header>
				<h1>Create Meet</h1>
			</header>
			<div className='cm-info'>
				<label>Meet Name:</label>
				<input onChange={onMeetNameInput} />
				<label>Number of Judges:</label>
				<select value={numJudges} onChange={onNumJudgesInput}>
					<option value=''></option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<div className='cm-add-btn'>
					<button
						onClick={() => {
							setOpenPasswordModal(!openPasswordModal);
						}}
					>
						Add Diver
					</button>
				</div>
				<div className='cm-diver-list'>
					{divers.map((d) => (
						<DisplayDiver key={d.diverName} diver={d} />
					))}
				</div>
			</div>
			{/* Modal */}
			{openPasswordModal && (
				<div className='modal-background'>
					<div className='modal-container'>
						<div className='modal-content'>
							<AddDiver
								setModal={setOpenPasswordModal}
								modal={openPasswordModal}
							/>
							<footer>
								<button
									on
									onClick={() => {
										setOpenPasswordModal(!openPasswordModal);
									}}
								>
									Close
								</button>
							</footer>
						</div>
					</div>
				</div>
			)}
			<div className='cm-foot'>
				<Link className='cm-btn' to='/meetrun'>
					Create Meet
				</Link>
			</div>
		</div>
	);
};

export default CreateMeet;
