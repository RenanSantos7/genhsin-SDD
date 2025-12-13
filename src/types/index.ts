import { ColorValue } from 'react-native';

export type StatType =
	| 'LIFE'
	| 'DEF'
	| 'DEF%'
	| 'ATQ'
	| 'ATQ%'
	| 'LIFE%'
	| 'CRIT_RATE%'
	| 'CRIT_DMG%'
	| 'ELEM_PROF'
	| 'ENERGY_REC%'
	| 'ENERGY_REC'
	| 'FIS_DMG%'
	| 'ANEMO_DMG%'
	| 'PYRO_DMG%'
	| 'GEO_DMG%'
	| 'HYDRO_DMG%'
	| 'DENDRO_DMG%'
	| 'ELECTRO_DMG%';

export type Stat = {
	stat: StatType;
	value: number;
};

export type Artifact = {
	name: string;
	set: string;
	stars: 3 | 4 | 5;
	level: number; // o máximo é stars === 5 ? 20 : 16
	mainStat: Stat;
	subStats: Stat[];
};

export type Weapon = {
	name: string;
	stars: 3 | 4 | 5;
	level: number; // 0 a 90
	refinement: 1 | 2 | 3 | 4 | 5;
};

export type Talents = {
	normal: number;
	elemental: number;
	burst: number;
};

export type Character = {
	id: string; // uuid-v4
	characterName: string;
	level: number;
	weapon: Weapon;
	artifacts: Artifact[];
	constellation: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	talents: Talents;
};

export type Team = {
	id: string; // uuid-v4
	teamName: string;
	members: string[]; // IDs dos personagens
};

export type Color = {
	main: ColorValue;
	light?: ColorValue;
	dark?: ColorValue;
};

export type GrayPalette = {
	100: ColorValue;
	200: ColorValue;
	300: ColorValue;
	400: ColorValue;
	500: ColorValue;
	600: ColorValue;
	700: ColorValue;
};

export type Size = {
	xsm?: number;
	sm: number;
	md: number;
	lg: number;
	xl?: number;
	xxl?: number;
};

export type Theme = {
	colors: {
		primary: Color;
		secondary: Color;
		background: Color;
		text: Color;
		error: Color;
		gray: GrayPalette;
	};
	sizes: {
		spacing: Size;
		text: Size;
		borderRadius: Size;
		[key: string]: Size;
	};
};
