import { z } from 'zod';

export const schema = z.object({
	teamName: z.string().min(1, 'Nome do time é obrigatório'),
	members: z.array(z.string()).max(4, 'O time pode ter no máximo 4 personagens'),
});

export type FormData = z.infer<typeof schema>;
