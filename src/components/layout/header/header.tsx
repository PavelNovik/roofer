import { Logo } from '@/components/ui/logo/logo'
import { Typography } from '@/components/ui/typography/typography'
import s from './header.module.scss'

export const Header = () => {
  return (
    <header style={{ marginTop: '20px' }}>
      <Logo />
      <div className={s.menuList}>
        {menuList.map(i => (
          <Typography key={i}>{i}</Typography>
        ))}
      </div>
      <br />
      This is HEADER. <b>This project has been created for my Polish friend Błarzej!</b>
    </header>
  )
}

const menuList = ['home', 'about', 'news', 'contact', 'services', 'projects']
