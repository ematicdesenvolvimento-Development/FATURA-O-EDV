"use client";

import { z } from "zod";

export const contaBancariaSchema = z.object({
  banco: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Banco é obrigatório" : "Campo inválido",
    })
    .min(1, "Banco é obrigatório")
    .max(50, "Banco deve ter no maxímo 50 caracteres"),
  conta: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Conta é obrigatória" : "Campo inválido",
    })
    .min(1, "Conta é obrigatória")
    .max(50, "Conta deve ter no maxímo 50 caracteres"),
  iban: z
    .string({
      error: (iss) => iss.input === undefined ? "IBAN é obrigatório" : "Campo inválido",
    })
    .min(1, "IBAN é obrigatório")
    .max(50, "IBAN deve ter no maxímo 50 caracteres"),
  e_ativo: z.boolean().nullable(),
});

export type ContaBancariaFormData = z.infer<typeof contaBancariaSchema>;
