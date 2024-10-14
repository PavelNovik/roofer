import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'

export type CardT<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardT<T>) => {
  const { as: Component = 'div', className, ...rest } = props
  return <Component className={clsx(className)} {...rest} />
}
