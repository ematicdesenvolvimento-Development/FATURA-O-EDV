"use client";

import { z } from "zod";

export const cartaoConsumoSchema = z.object({
  numero: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Número é obrigatório" : "Campo inválido",
    })
    .min(1, "Número é obrigatório")
    .max(15, "Número deve ter no maxímo 15 caracteres"),
  cliente: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Cliente é obrigatório" : "Campo inválido",
    })
    .min(1, "Cliente é obrigatório")
    .max(60, "Cliente deve ter no maxímo 60 caracteres"),
  montante: z.number(
    {
      error: (iss) =>
        iss.input === undefined ? "Montante é obrigatório" : "Campo inválido",
    }
  ).min(0, "Montante deve ser maior ou igual a 0"),
});

export type CartaoConsumoFormData = z.infer<typeof cartaoConsumoSchema>;
