import { Logo } from '@/components/ui/logo/logo'
import s from './header.module.scss'
import { Menu } from '@/components/ui/menu/menu'
import { Phone } from '@/components/ui/phone/phone'
import { Button } from '@/components/ui/button/button'

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo className={s.logo} />
      <Menu className={s.menu} menuList={menuList} />
      <Phone className={s.phone} />
      <Button>Get in touch</Button>
    </header>
  )
}

const menuList = ['home', 'about', 'news', 'contact', 'services', 'projects']
