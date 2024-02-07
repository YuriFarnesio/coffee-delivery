import { CheckFat, ShoppingCart, Trash } from '@phosphor-icons/react'

type ButtonProps = {
  variant: 'primary' | 'remove' | 'add'
  form?: string
  isLoading?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export function Button({
  variant = 'primary',
  form,
  isLoading,
  onClick,
  children,
}: ButtonProps) {
  switch (variant) {
    case 'primary':
      return (
        <button
          type="submit"
          form={form}
          className="w-full flex items-center justify-center buttonG text-white uppercase bg-yellow-default hover:bg-yellow-dark rounded-md py-3 px-2 transition"
        >
          {children}
        </button>
      )
    case 'remove':
      return (
        <button
          type="button"
          onClick={onClick}
          className="group h-8 flex items-center text-sm text-base-text hover:text-base-subtitle uppercase bg-base-button hover:bg-base-hover rounded-md gap-1 py-1.5 px-2 transition"
        >
          <Trash
            size={16}
            className="text-purple-default group-hover:text-purple-dark transition"
          />
          remover
        </button>
      )
    case 'add':
      return (
        <button
          type="button"
          disabled={isLoading}
          onClick={onClick}
          className={`flex items-center justify-center ${isLoading ? 'bg-yellow-light' : 'bg-purple-dark'} hover:brightness-95 rounded-md p-2 transition`}
        >
          {isLoading ? (
            <CheckFat weight="fill" size={22} className="text-yellow-dark" />
          ) : (
            <ShoppingCart size={22} weight="fill" className="text-base-card" />
          )}
        </button>
      )
  }
}
