import { Wrapper } from '@/components/ui/wrapper/wrapper'
import { Typography } from '@/components/ui/typography/typography'
import s from './partners.module.scss'
import { PartnerLogo } from '@/components/ui/logo/partner-logo'

export const Partners = () => {
  return (
    <section id={'partners'} className={s.partners}>
      <PartnerLogo />
      <Wrapper>
        <Typography className={s.title}>Our trusted partners</Typography>
        <Wrapper>
          {/*<Partner1 />*/}
          {/*<Partner2 />*/}
          {/*<Partner4 />*/}
          {/*<Partner5 />*/}
          {/*<Partner6 />*/}
        </Wrapper>
      </Wrapper>
    </section>
  )
}
