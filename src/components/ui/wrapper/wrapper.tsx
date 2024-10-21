import { ReactNode } from 'react'
import clsx from 'clsx'
import s from './wrapper.module.scss'

export type WrapperT = {
  children?: ReactNode
  className?: string
}

export const Wrapper = (props: WrapperT) => {
  const { children, className } = props
  return <div className={clsx(s.wrapper, className)}>{children}</div>
}
