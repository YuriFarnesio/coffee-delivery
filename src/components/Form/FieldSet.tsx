import { Icon } from '@phosphor-icons/react'

type FieldSetProps = {
  legend: string
  description: string
  Icon: Icon
  iconColor: string
  children: React.ReactNode
}

export function FieldSet({
  legend,
  description,
  Icon,
  iconColor,
  children,
}: FieldSetProps) {
  return (
    <fieldset className="flex flex-col bg-base-card rounded-md gap-8 p-10">
      <div className="flex gap-2">
        <Icon size={22} className={iconColor} />
        <div className="flex flex-col gap-0.5">
          <legend className="textM text-base-subtitle">{legend}</legend>
          <span className="textS text-base-text">{description}</span>
        </div>
      </div>

      {children}
    </fieldset>
  )
}
