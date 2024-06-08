import { z } from "zod";

export const mesageEditForm = z.object({
  content: z.string().min(1, "Este campo é obrigatório."),
});
