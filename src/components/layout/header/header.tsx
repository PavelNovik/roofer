import { Logo } from '@/components/ui/logo/logo'
import { Typography } from '@/components/ui/typography/typography'
import s from './header.module.scss'
import { PartnerLogo } from '@/components/ui/logo/partner-logo'

export const Header = () => {
  return (
    <header style={{ marginTop: '20px' }}>
      <Logo />
      <ul className={s.menuList}>
        {menuList.map(i => (
          <li key={i}>
            <Typography>{i}</Typography>
          </li>
        ))}
      </ul>
      <br />
      <PartnerLogo />
      This is HEADER. <b>This project has been created for my Polish friend Błarzej!</b>
    </header>
  )
}

const menuList = ['home', 'about', 'news', 'contact', 'services', 'projects']
