import { Logo1 } from '@/assets/icons/logo1'
import { Logo2 } from '@/assets/icons/logo2'
import s from './logo.module.scss'
import { Typography } from '@/components/ui/typography/typography'

export const Logo = () => {
  return (
    <div className={s.logoBox}>
      <div className="wwww">
        <div className={s.logo}>
          <Logo2 />
          <Logo1 />
        </div>
      </div>

      <div>
        <Typography className={s.logoTitle}>Roofers</Typography>
      </div>
    </div>
  )
}
