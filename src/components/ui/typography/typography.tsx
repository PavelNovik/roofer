import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: 'dark' | 'light'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', className, ...rest } = props

  return <Component className={clsx(className)} {...rest} />
}
