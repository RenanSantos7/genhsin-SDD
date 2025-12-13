import { z } from 'zod';

export const schema = z.object({
	characterName: z.string().min(1, 'Nome é obrigatório'),
	level: z.number().min(1).max(90),
	constellation: z.number().min(0).max(6),
	weaponName: z.string().min(1, 'Nome da arma é obrigatório'),
	weaponStars: z.number().refine(val => [3, 4, 5].includes(val), {
		message: 'Estrelas devem ser 3, 4 ou 5',
	}),
	weaponLevel: z.number().min(0).max(90),
	weaponRefinement: z.number().min(1).max(5),
	talentNormal: z.number().min(1),
	talentElemental: z.number().min(1),
	talentBurst: z.number().min(1),
});

export type FormData = z.infer<typeof schema>;
