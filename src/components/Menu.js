import React from 'react';
import { Link } from 'react-router-dom';

import MeetList from './meetList/MeetList';

function Menu() {
	return (
		<div>
			<h1>Meets</h1>
			<div>
				<MeetList />
			</div>
			<div>
				<Link to='/test'>Test</Link>
			</div>
			<div>
				<Link to='/createmeet'>Create Meet</Link>
			</div>
		</div>
	);
}

export default Menu;
