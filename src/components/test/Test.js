import React from 'react';
import meetData from '../../dummyData/mockmeet.json';
import './test.css';
import TestTable from './TestTable';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Test = () => {
	const download = () => {
		const input = document.getElementById('div-print');
		html2canvas(input, {
			logging: true,
			letterRendering: 1,
			useCORS: true,
		}).then((canvas) => {
			const imgWidth = 210;
			const imgHeight = 297;
			const imgData = canvas.toDataURL('img/png');
			const pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);
			pdf.addImage(imgData, 'PNG', -22, 0, 210, 1000);
			pdf.save('testtable.pdf');
		});
	};

	return (
		<div>
			<body className='print' id='div-print'>
				<TestTable />
			</body>
			<button onClick={download}>Download</button>
		</div>
	);
};

export default Test;
