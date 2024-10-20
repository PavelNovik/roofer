import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import clsx from 'clsx'
import { Typography } from '@/components/ui/typography/typography'
import s from './input.module.scss'

export type InputProps = {
  className?: string
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'div'>, InputProps>((props, ref) => {
  const { className, errorMessage, label, placeholder, type = 'text', ...rest } = props
  return (
    <div className={clsx(className)} ref={ref}>
      <Typography className={s.fieldTitle}>{label}</Typography>
      <input type={type} name={'name'} placeholder={placeholder} {...rest} />
      {errorMessage && <Typography>{errorMessage}</Typography>}
    </div>
  )
})
