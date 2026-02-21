"use client";

import { z } from "zod";

export const lojaCaixaSchema = z.object({
  nome: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Nome é obrigatório" : "Campo inválido",
    })
    .min(1, "Nome é obrigatório")
    .max(50, "Nome deve ter no maxímo 50 caracteres"),
  descricao: z.string().nullable(), 
  e_ativo: z.boolean().nullable(),
});

export type LojaCaixaFormData = z.infer<typeof lojaCaixaSchema>;
