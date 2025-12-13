# Genshin List - Copilot Instructions

## Project Overview

Genshin List is a React Native/Expo application for tracking Genshin Impact characters, weapons, and artifacts. It uses local persistence and context-based state management.

## Tech Stack

- **Package Manager:** yarn
- **Framework:** Expo (React Native)
- **Language:** TypeScript
- **Navigation:** React Navigation (Native Stack)
- **State Management:** React Context API
- **Persistence:** AsyncStorage (via custom hook)
- **Styling:** StyleSheet API with Theme Context
- **Form Handling:** React Hook Form + Zod
- **Key Libraries:**
    - `uuid` & `react-native-get-random-values` (ID generation)
    - `react-native-keyboard-controller`
    - `zod` (Validation)
    - `prettier` (Code formatting)
    - `jest` & `@testing-library/react-native` (Testing)

## Architecture & Patterns

### State & Persistence

- **Global State:** Managed in `src/context/` (e.g., `CharactersContext`, `ThemeContext`).
- **Persistence:** Use the `usePersistentState` hook in contexts to automatically sync state with `AsyncStorage`.
    - Example: `const [characters, setCharacters] = usePersistentState<Character[]>('@key', []);`

### Styling Strategy

- **Theme:** Defined in `src/styles/index.ts` and provided via `ThemeContext`.
- **Component Styles:** Create a separate `styles.tsx` file for each component.
- **Pattern:** Export a function that accepts the theme and returns the stylesheet.
- Use only colors and sizes from the theme.

### Screen Structure

- **Wrapper:** All screens must be wrapped with `ScreenWrapper` (`src/components/ScreenWrapper`).
- **Features:** `ScreenWrapper` handles `SafeAreaView`, `StatusBar`, `KeyboardAvoidingView`, and common header logic.

### Navigation

- **Type Safety:** Define route params in `src/routes/app.routes.tsx`.
- **Structure:** `AppRoutes` (Stack Navigator) is wrapped by `Routes` (NavigationContainer).

## Data Models

The following types are the source of truth for the application data structures.

```ts
type Stat = {
	stat:
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
	value: number;
};

type Artifact = {
	name: string;
	set: string;
	stars: 3 | 4 | 5;
	level: number; // max: stars === 5 ? 20 : 16
	mainStat: Stat;
	subStats: Stat[];
};

type Weapon = {
	name: string;
	stars: 3 | 4 | 5;
	level: number; // 0 to 90
	refinement: 1 | 2 | 3 | 4 | 5;
};

type Talents = {
	normal: number;
	elemental: number;
	burst: number;
};

type Character = {
	id: string; // uuid-v4
	characterName: string;
	level: number;
	weapon: Weapon;
	artifacts: Artifact[];
	constellation: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	talents: Talents;
};

type Team = {
	id: string; // uuid-v4
	teamName: string;
	members: string[]; // Character IDs
};

type Color = {
	main: string; // ColorValue
	light?: string;
	dark?: string;
};

type Size = {
	xsm?: number;
	sm: number;
	md: number;
	lg: number;
	xl?: number;
	xxl?: number;
};

type Theme = {
	colors: Color[];
	sizes: {
		[key: string]: Size;
	};
};
```

## Screens & Features

### Home

- List registered characters and teams.
- Show "Ainda não há personagem cadastrado" if empty.
- Buttons: Add Character, Add Team, Export JSON (monoline).

### CharacterForm

- Create/Edit character.
- Fields must match `Character` type.
- If editing, pre-fill data and update button text.

### CharacterDetails

- Display all character details.
- Title: Character Name.
- Edit button.

### TeamForm

- Create team.
- Select from existing characters only.

### TeamDetails

- Display team details.
- Title: Team Name.
- Edit button.

## Code Style & Conventions

### Prettier configuration

- Use Prettier with default settings for code formatting.
- Use theses settings to prettier:

```json
{
	"arrowParens": "avoid",
	"jsxSingleQuote": true,
	"printWidth": 80,
	"singleQuote": true,
	"tabWidth": 4,
	"useTabs": true
}
```

- Run `npx prettier --write .` to format the entire codebase every time code is changed.

### Exports

- Use **default exports** for components and contexts.
- Use **function declarations** (`export default function Name() {}`) instead of arrow functions for components.

### Imports

- Grouping:
	1. `react` imports
	2. `react-native` imports
	3. External libraries (e.g., `@react-navigation/native`)
	4. Internal modules (relative paths)
- Separate groups with a blank line.
- Order: 
	- follow the ASCII order.
	- the alphabetical order has to consider the import statement text not the path only.

## Critical Workflows

- **New Screen:**
    1. Create folder in `src/screens/`.
    2. Create `index.tsx` (component) and `styles.tsx`.
    3. Register in `RootStackParamList` in `src/routes/app.routes.tsx`.
    4. Add to `AppRoutes` stack.

- **New utilitary function**
		1. Create in `src/utils/`.
		2. Write each function in its own file.
		3. Export the function as default.

- **New context:**
		1. Create folder in `src/context/`.
		2. Name the file with the context name, but in lowerCamelCase.
		3. Use `usePersistentState` for state that needs persistence.
		4. Wrap `Routes` with the new context provider in `src/App.tsx`.

- **Unitary Tests**
		1. Create `tests.tsx` file in the component or screen folder.
		2. Use `jest` and `@testing-library/react-native`.
	
- **Integration Tests**
		1. Create `__tests__` folder in the scr folder.
		2. Create test files named after the feature being tested.
		3. Use `jest` and `@testing-library/react-native`.
		