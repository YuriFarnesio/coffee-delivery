import { z } from 'zod'

export const cepRegex = /^\d{5}-\d{3}$/

export const newOrder = z.object({
  cep: z
    .string()
    .min(1, 'Informe o CEP')
    .regex(cepRegex, 'Escreva no formato 00000-000'),
  street: z
    .string()
    .min(1, 'Informe a rua')
    .max(50, 'A rua deve ter no máximo 50 caracteres')
    .trim(),
  number: z.number({ invalid_type_error: 'Informe o número' }),
  complement: z
    .string()
    .max(50, 'O complemento deve ter no máximo 50 caracteres')
    .trim()
    .optional(),
  neighborhood: z
    .string()
    .min(1, 'Informe o bairro')
    .max(50, 'O bairro deve ter no máximo 50 caracteres')
    .trim(),
  city: z
    .string()
    .min(1, 'Informe a cidade')
    .max(50, 'A cidade deve ter no máximo 50 caracteres')
    .trim(),
  state: z
    .string()
    .min(1, 'Informe a UF')
    .max(2, 'A cidade deve ter no máximo 2 caracteres')
    .toUpperCase()
    .trim(),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type NewOrderProps = z.infer<typeof newOrder>
