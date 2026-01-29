"use client";

import { z } from "zod";

export const forgotPasswordSchema = z.object({
  nome: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Nome é obrigatório" : "Campo inválido",
    })
    .min(1, "Nome é obrigatório")
    .max(50, "Nome deve ter no maxímo 50 caracteres"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
