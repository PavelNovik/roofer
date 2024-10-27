import { Logo } from '@/components/ui/logo/logo'
import s from './header.module.scss'
import { Menu } from '@/components/ui/menu/menu'
import { Phone } from '@/components/ui/phone/phone'
import { Button } from '@/components/ui/button/button'
import { Wrapper } from '@/components/ui/wrapper/wrapper'

export const Header = () => {
  return (
    <header className={s.header}>
      <Wrapper className={s.headerContext}>
        <Logo className={s.logo} />
        <Wrapper className={s.headerWrapper}>
          <Menu className={s.menu} menuList={menuList} />
          <Phone className={s.phone} />
          <Button>Get in touch</Button>
        </Wrapper>
      </Wrapper>
    </header>
  )
}

const menuList = ['home', 'about', 'news', 'contact', 'services', 'projects']
