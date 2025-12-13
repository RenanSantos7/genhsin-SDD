import { createContext, useContext, ReactNode } from 'react';

import { usePersistentState } from '../hooks/usePersistentState';
import { Character, Team } from '../types';

interface CharactersContextData {
	characters: Character[];
	addCharacter: (character: Character) => void;
	updateCharacter: (character: Character) => void;
	deleteCharacter: (id: string) => void;
	teams: Team[];
	addTeam: (team: Team) => void;
	updateTeam: (team: Team) => void;
	deleteTeam: (id: string) => void;
}

const CharactersContext = createContext<CharactersContextData>(
	{} as CharactersContextData,
);

export default function CharactersProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [characters, setCharacters] = usePersistentState<Character[]>(
		'@genshin-list:characters',
		[],
	);
	const [teams, setTeams] = usePersistentState<Team[]>(
		'@genshin-list:teams',
		[],
	);

	function addCharacter(character: Character) {
		setCharacters(prev => [...prev, character]);
	}

	function updateCharacter(updatedCharacter: Character) {
		setCharacters(prev =>
			prev.map(char =>
				char.id === updatedCharacter.id ? updatedCharacter : char,
			),
		);
	}

	function deleteCharacter(id: string) {
		setCharacters(prev => prev.filter(char => char.id !== id));
	}

	function addTeam(team: Team) {
		setTeams(prev => [...prev, team]);
	}

	function updateTeam(updatedTeam: Team) {
		setTeams(prev =>
			prev.map(team => (team.id === updatedTeam.id ? updatedTeam : team)),
		);
	}

	function deleteTeam(id: string) {
		setTeams(prev => prev.filter(team => team.id !== id));
	}

	return (
		<CharactersContext.Provider
			value={{
				characters,
				addCharacter,
				updateCharacter,
				deleteCharacter,
				teams,
				addTeam,
				updateTeam,
				deleteTeam,
			}}
		>
			{children}
		</CharactersContext.Provider>
	);
}

export function useCharacters() {
	return useContext(CharactersContext);
}
