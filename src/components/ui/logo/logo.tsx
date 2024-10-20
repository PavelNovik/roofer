import { Logo1 } from '@/assets/icons/logo1'
import { Logo2 } from '@/assets/icons/logo2'
import s from './logo.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'
type LogoT = {
  className?: string
}

export const Logo = (props: LogoT) => {
  const { className } = props
  return (
    <div className={clsx(className, s.logoBox)}>
      <div className={s.logo}>
        <Logo2 />
        <Logo1 />
      </div>

      <div>
        <Typography className={s.logoTitle}>Roofers</Typography>
      </div>
    </div>
  )
}
