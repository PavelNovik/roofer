import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './button.module.scss'

export type ButtonT<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonT<T>) => {
  const { as: Component = 'button', fullWidth, variant = 'primary', className, ...rest } = props
  return <Component className={clsx(s[variant], fullWidth && s.fullWidth, className)} {...rest} />
}
