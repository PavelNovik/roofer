import { Wrapper } from '@/components/ui/wrapper/wrapper'
import { Typography } from '@/components/ui/typography/typography'
import s from './partners.module.scss'
import { PartnerLogo } from '@/components/ui/logo/partner-logo'
import { Partner1 } from '@/assets/icons/partner1'
import { Partner2 } from '@/assets/icons/partner2'
import { Partner4 } from '@/assets/icons/partner4'
import { Partner5 } from '@/assets/icons/partner5'
import { Partner6 } from '@/assets/icons/partner6'

export const Partners = () => {
  return (
    <section id={'partners'} className={s.partners}>
      <Wrapper>
        <Typography className={s.title}>Our trusted partners</Typography>
        <Wrapper>
          <PartnerLogo className={s.cardWrapper} />
          <Partner1 className={s.cardWrapper} />
          <Partner2 className={s.cardWrapper} />
          <Partner4 className={s.cardWrapper} />
          <Partner5 className={s.cardWrapper} />
          <Partner6 className={s.cardWrapper} />
        </Wrapper>
      </Wrapper>
    </section>
  )
}
