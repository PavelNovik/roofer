import { ReactNode } from 'react'
import s from './section.module.scss'
import clsx from 'clsx'

type SectionT = {
  className?: string
  children?: ReactNode
  id: string
}
export const Section = (props: SectionT) => {
  const { children, className, id } = props
  return (
    <section id={id} className={clsx(className, s.section)}>
      {children}
    </section>
  )
}
