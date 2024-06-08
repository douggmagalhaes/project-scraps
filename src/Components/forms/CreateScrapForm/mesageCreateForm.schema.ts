import { z } from "zod";

export const mesageCreateForm = z.object({
  content: z.string().min(1, "Este campo é obrigatório."),
});
