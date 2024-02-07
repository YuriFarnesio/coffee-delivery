import { useCallback, useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { toast } from 'react-toastify'
import { MapPinLine } from '@phosphor-icons/react'

import { FieldSet, InputText } from '../../components'

import { NewOrderProps, cepRegex } from '../../schemas'

type AddressFormProps = {
  form: UseFormReturn<NewOrderProps>
}

export function AddressForm({ form }: AddressFormProps) {
  const [disabledFields, setDisabledFields] = useState({
    state: false,
    city: false,
    neighborhood: false,
    street: false,
  })

  const {
    register,
    formState: { errors },
    setValue,
    setFocus,
    watch,
  } = form

  const cep = watch('cep')

  const fetchCep = useCallback(async () => {
    const unmasked = cep.replace('-', '')

    await fetch(`https://viacep.com.br/ws/${unmasked}/json/`)
      .then(async (data) => {
        const values = await data.json()

        setValue('state', values.uf)
        setValue('city', values.localidade)
        setValue('neighborhood', values.bairro)
        setValue('street', values.logradouro)

        setDisabledFields({
          state: !!values.uf,
          city: !!values.localidade,
          neighborhood: !!values.bairro,
          street: !!values.logradouro,
        })

        setFocus(values.logradouro ? 'number' : 'street')
      })
      .catch((e) => {
        console.log(e)
        toast.error('Não foi possível encontrar o CEP!')
      })
  }, [cep, setValue, setFocus])

  useEffect(() => {
    if (cep?.length === 9 && cepRegex.test(cep)) {
      fetchCep()
    }
  }, [cep, fetchCep])

  return (
    <FieldSet
      legend="Endereço de Entrega"
      description="Informe o endereço onde deseja receber seu pedido"
      Icon={MapPinLine}
      iconColor="text-yellow-dark"
    >
      <div className="flex flex-col gap-4">
        <InputText
          placeholder="CEP"
          {...register('cep')}
          error={errors.cep}
          className="max-w-[12.5rem]"
        />

        <InputText
          placeholder="Rua"
          {...register('street')}
          error={errors.street}
          disabled={disabledFields.street}
        />

        <div className="w-full flex gap-3">
          <InputText
            type="number"
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
            error={errors.number}
            className="max-w-[12.5rem]"
          />

          <InputText
            placeholder="Complemento"
            {...register('complement')}
            error={errors.complement}
            optional
          />
        </div>
        <div className="w-full flex gap-3">
          <InputText
            placeholder="Bairro"
            {...register('neighborhood')}
            error={errors.neighborhood}
            disabled={disabledFields.neighborhood}
            className="max-w-[12.5rem]"
          />

          <InputText
            placeholder="Cidade"
            {...register('city')}
            error={errors.city}
            disabled={disabledFields.city}
          />

          <InputText
            placeholder="UF"
            {...register('state')}
            error={errors.state}
            disabled={disabledFields.state}
            className="max-w-[3.75rem]"
          />
        </div>
      </div>
    </FieldSet>
  )
}
