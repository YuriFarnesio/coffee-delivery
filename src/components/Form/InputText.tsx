import { InputHTMLAttributes, forwardRef, useMemo } from 'react'
import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  error?: FieldError
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ optional, disabled, error, className, ...rest }, ref) => {
    const labelDisabled = useMemo(
      () =>
        disabled
          ? 'bg-base-button border-base-hover cursor-not-allowed'
          : 'bg-base-input border-base-button hover:border-yellow-dark focus-within:border-yellow-dark',
      [disabled],
    )

    const inputDisabled = useMemo(
      () => (disabled ? 'cursor-not-allowed' : ''),
      [disabled],
    )

    return (
      <div className={twMerge('w-full flex flex-col gap-1', className)}>
        <label
          className={twMerge(
            'flex items-center border border-solid rounded cursor-text gap-1 p-3 transition',
            labelDisabled,
          )}
        >
          <input
            type="text"
            ref={ref}
            disabled={disabled}
            className={twMerge(
              'w-full textS text-base-text placeholder:text-base-label bg-transparent',
              inputDisabled,
            )}
            {...rest}
          />

          {optional && (
            <span className="textXS italic text-base-label">Opcional</span>
          )}
        </label>

        {error?.message && (
          <p role="alert" className="textXS text-red-600">
            {error.message}
          </p>
        )}
      </div>
    )
  },
)

InputText.displayName = 'InputText'
