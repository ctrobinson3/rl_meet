import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { addedDiversAtom } from './cmRecoil/cmAtoms';
import DiveCheck from '../diveLists/DiveCheck';
import { diveArrayFunction } from '../diveLists/DiveArray';

const AddDiver = ({ setModal, modal }) => {
	//find dives
	const diveCheck = DiveCheck;
	const diveArray = diveArrayFunction();

	const [diverAtom, setDiverAtom] = useRecoilState(addedDiversAtom);
	const [diver, setDiver] = useState({
		diverName: '',
		diverSchool: '',
		diverDives: [],
	});
	const [diveList, setDiveList] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
	});
	const [validList, setValidList] = useState(false);
	const [diveDisplay, setDiveDisplay] = useState(false);

	const handleChange = (e) => {
		setDiver({
			...diver,
			[e.target.id]: e.target.value,
		});
	};

	const handleDive = (e) => {
		setDiveList({
			...diveList,
			[e.target.id]: e.target.value,
		});
	};

	const enterDiver = () => {
		setDiverAtom([...diverAtom, diver]);
		setModal(!modal);
	};

	const listCheck = () => {
		findDives();
	};

	const findDives = () => {
		let validDiveCount = 0;
		const d = diveList;
		const list = [d.d1, d.d2, d.d3, d.d4, d.d5, d.d6];
		const dList = list.map((a) => {
			let d = a.toLowerCase();
			if (diveCheck.includes(d)) {
				const index = diveCheck.indexOf(d);
				const value = diveArray[index];
				validDiveCount++;
				return value;
			}
			//returns an empty dive
			else return diveArray[113];
		});

		if (validDiveCount < 6) {
			console.log('err');
		} else {
			setValidList(true);
			setDiveDisplay(true);
			diver.diverDives = dList;
		}
	};
	const display = (i) => {
		let d = diver.diverDives;
		let thisDive = d[i];
		return (
			<b>
				{thisDive.direction} {thisDive.rotation} {thisDive.position}
			</b>
		);
	};

	return (
		<div className='ad-wrap'>
			<b>Add Diver</b>
			<label>Diver Name:</label>
			<input
				id='diverName'
				type='text'
				value={diver.diverName}
				onChange={handleChange}
			/>
			<label>Diver School:</label>
			<input
				id='diverSchool'
				type='text'
				value={diver.diverSchool}
				onChange={handleChange}
			/>
			<label>Dives:</label>
			<div className='ad-dives'>
				<div>
					<label>First:</label>
					{!diveDisplay && (
						<input
							className='dive-input'
							id='d1'
							type='text'
							value={diveList.d1}
							onChange={handleDive}
						></input>
					)}
					{diveDisplay && <div>{display(0)}</div>}
				</div>
				<div>
					<label>Second:</label>
					{!diveDisplay && (
						<input
							className='dive-input'
							id='d2'
							type='text'
							value={diveList.d2}
							onChange={handleDive}
						></input>
					)}
					{diveDisplay && <div>{display(1)}</div>}
				</div>
				<div>
					<label>Third:</label>
					{!diveDisplay && (
						<input
							className='dive-input'
							id='d3'
							type='text'
							value={diveList.d3}
							onChange={handleDive}
						></input>
					)}
					{diveDisplay && <div>{display(2)}</div>}
				</div>
				<div>
					<label>Fourth:</label>
					{!diveDisplay && (
						<input
							className='dive-input'
							id='d4'
							type='text'
							value={diveList.d4}
							onChange={handleDive}
						></input>
					)}
					{diveDisplay && <div>{display(3)}</div>}
				</div>

				<div>
					<label>Fifth:</label>
					{!diveDisplay && (
						<input
							className='dive-input'
							id='d5'
							type='text'
							value={diveList.d5}
							onChange={handleDive}
						></input>
					)}
					{diveDisplay && <div>{display(4)}</div>}
				</div>
				<div>
					<label>Sixth:</label>
					{!diveDisplay && (
						<input
							className='dive-input'
							id='d6'
							type='text'
							value={diveList.d6}
							onChange={handleDive}
						></input>
					)}
					{diveDisplay && <div>{display(5)}</div>}
				</div>
				<button onClick={listCheck}>Check List</button>
				{validList && <button onClick={enterDiver}>Enter Diver</button>}
			</div>
		</div>
	);
};

export default AddDiver;
