"use client";

import { z } from "zod";

export const loginSchema = z.object({
  nome: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Nome é obrigatório" : "Campo inválido",
    })
    .max(50, "Nome deve ter no maxímo 50 caracteres"),
  senha: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Senha é obrigatório" : "Campo inválido",
    })
    .max(16, "Senha deve ter no maxímo 16 caracteres"),
  lembrar: z.boolean().nullable(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
