import s from './logo.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import { PartnerLogo1 } from '@/assets/icons/partner3_1'
import { PartnerLogo2 } from '@/assets/icons/partner3_2'

export const PartnerLogo = () => {
  return (
    <div className={s.logoBox}>
      <div className="wwww">
        <div className={s.logo}>
          <PartnerLogo1 />
          <PartnerLogo2 />
        </div>
      </div>

      <div>
        <Typography className={s.logoTitle}>Roofers</Typography>
      </div>
    </div>
  )
}