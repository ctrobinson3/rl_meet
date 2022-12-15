import { atom } from 'recoil';

export const meetNameAtom = atom({
	key: 'meetName',
	default: '',
});

export const numJudgesAtom = atom({
	key: 'numJudges',
	default: '',
});

export const addedDiversAtom = atom({
	key: 'addedDiversAtom',
	default: [],
});

//
// Meet Run
//

export const meetDataAtom = atom({
	key: 'meetDataAtom',
	default: [],
});

export const judgeAtom = atom({
	key: 'judgeAtom',
	default: 1,
});

export const diverScoreAtom = atom({
	key: 'diverScoreAtom',
	default: [],
});

export const totalScoreAtom = atom({
	key: 'totalScoreAtom',
	default: 0,
});

export const roundAtom = atom({
	key: 'roundAtom',
	default: 0,
});

export const diverOrderAtom = atom({
	key: 'diverOrderAtom',
	default: 0,
});

export const netAtom = atom({
	key: 'netAtom',
	default: 0,
});
