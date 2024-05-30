import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(3, "Este campo é obrigatório."),
    email: z
      .string()
      .min(1, "Este campo é obrigatório.")
      .email("Forneça um e-mail válido."),
    password: z.string().min(5, "São necessários no mínimo (4) caracteres."),
    confirmPassword: z.string().min(1, "Este campo é obrigatório."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });
