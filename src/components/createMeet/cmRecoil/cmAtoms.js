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
