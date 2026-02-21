"use client";

import { z } from "zod";

export const lojaSchema = z.object({
  nome: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Nome é obrigatório" : "Campo inválido",
    })
    .min(1, "Nome é obrigatório")
    .max(50, "Nome deve ter no maxímo 50 caracteres"),
  localizacao: z
    .string({
      error: (iss) =>
        iss.input === undefined
          ? "Localização é obrigatória"
          : "Campo inválido",
    })
    .min(1, "Localização é obrigatória"),
  e_principal: z.boolean().nullable(),
  e_ativo: z.boolean().nullable(),
});

export type LojaFormData = z.infer<typeof lojaSchema>;
