import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { UseFormReturn } from 'react-hook-form'

import { FieldSet, InputSelect } from '..'

import { NewOrderProps } from '../../schemas/order'

type PaymentFormProps = {
  form: UseFormReturn<NewOrderProps>
}

export function PaymentForm({ form }: PaymentFormProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = form

  const error = errors.paymentMethod
  const paymentMethod = watch('paymentMethod')

  return (
    <FieldSet
      legend="Pagamento"
      description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      Icon={CurrencyDollar}
      iconColor="text-purple-default"
    >
      <div className="w-full flex flex-col gap-1">
        <div className="grid grid-cols-3 gap-3">
          <InputSelect
            value="credit"
            label="cartão de crédito"
            Icon={CreditCard}
            isSelected={paymentMethod === 'credit'}
            {...register('paymentMethod')}
          />
          <InputSelect
            value="debit"
            label="cartão de débito"
            Icon={Bank}
            isSelected={paymentMethod === 'debit'}
            {...register('paymentMethod')}
          />
          <InputSelect
            value="cash"
            label="dinheiro"
            Icon={Money}
            isSelected={paymentMethod === 'cash'}
            {...register('paymentMethod')}
          />
        </div>

        {error?.message && (
          <p role="alert" className="textXS text-red-600">
            {error.message}
          </p>
        )}
      </div>
    </FieldSet>
  )
}
