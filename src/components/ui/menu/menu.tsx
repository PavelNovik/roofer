import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'
import s from './menu.module.scss'

type MenuT = {
  menuList: string[]
  className?: string
}

export const Menu = (props: MenuT) => {
  const { menuList, className } = props
  return (
    <ul className={clsx(s.menuList, className)}>
      {menuList.map(i => (
        <li key={i}>
          <Typography>{i}</Typography>
        </li>
      ))}
    </ul>
  )
}
