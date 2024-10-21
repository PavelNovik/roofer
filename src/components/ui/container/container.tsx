import { ReactNode } from 'react'
import s from './container.module.scss'
import clsx from 'clsx'

export type ContainerT = {
  children?: ReactNode
  className?: string
}
export const Container = (props: ContainerT) => {
  const { children, className } = props
  return <div className={clsx(s.container, className)}>{children}</div>
}
