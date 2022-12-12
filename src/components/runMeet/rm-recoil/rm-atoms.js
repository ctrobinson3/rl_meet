import { atom } from 'recoil';

export const meetAtom = atom({
	key: 'meetAtom',
	default: [],
});

export const currentJudge = atom({
	key: 'currJudge',
	default: 1,
});

export const scoreAtom = atom({
	key: 'scoreAtom',
	default: [],
});

export const totalAtom = atom({
	key: 'totalAtom',
	default: 0,
});
