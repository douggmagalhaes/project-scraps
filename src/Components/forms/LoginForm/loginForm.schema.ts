import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, "Este campo é obrigatório.").email(),
  password: z.string().min(4, "São necessários no mínimo (4) caracteres."),
});
