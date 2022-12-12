import React from 'react';
import {
	Menu,
	OpenMeet,
	RunMeet,
	EndMeet,
	CreateMeet,
	MeetRun,
} from './components/index';
import { Route, Routes } from 'react-router-dom';
import Test from './components/test/Test';

const App = () => {
	return (
		<div className='app-wrap'>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<Menu />} />
					<Route path='/OpenMeet' element={<OpenMeet />} />
					<Route path='/runmeet' element={<RunMeet />} />
					<Route path='/endmeet' element={<EndMeet />} />
					<Route path='/test' element={<Test />} />
					<Route path='/createmeet' element={<CreateMeet />} />
					<Route path='/meetrun' element={<MeetRun />} />
				</Routes>
			</React.Suspense>
		</div>
	);
};

export default App;
