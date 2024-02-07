import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@phosphor-icons/react'

import { NewOrderProps } from '../../schemas'

type InputSelectProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
  value: NewOrderProps['paymentMethod']
  label: string
  Icon: Icon
  isSelected: boolean
}

export const InputSelect = forwardRef<HTMLInputElement, InputSelectProps>(
  ({ value, label, Icon, isSelected, ...rest }, ref) => {
    return (
      <label
        className={twMerge(
          'flex items-center justify-center rounded-md cursor-pointer gap-3 p-4 transition',
          isSelected
            ? 'bg-purple-light border border-solid border-purple-default'
            : 'bg-base-button hover:bg-base-hover border border-solid border-transparent',
        )}
      >
        <input
          type="radio"
          value={value}
          ref={ref}
          className="hidden"
          {...rest}
        />

        <Icon size={16} className="text-purple-default" />
        <span className="text-sm text-base-text uppercase">{label}</span>
      </label>
    )
  },
)

InputSelect.displayName = 'InputSelect'
