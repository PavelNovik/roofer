import { Wrapper } from '@/components/ui/wrapper/wrapper'
import { Typography } from '@/components/ui/typography/typography'
import s from './partners.module.scss'
import { PartnerLogo } from '@/components/ui/logo/partner-logo'
import { Partner1 } from '@/assets/icons/partner1'
import { Partner2 } from '@/assets/icons/partner2'
import { Partner4 } from '@/assets/icons/partner4'
import { Partner5 } from '@/assets/icons/partner5'
import { Partner6 } from '@/assets/icons/partner6'
import { Container } from '@/components/ui/container/container'
import clsx from 'clsx'

export const Partners = () => {
  return (
    <section id={'partners'} className={s.partners}>
      <Wrapper className={s.mainWrapper}>
        <Typography className={s.title}>Our trusted partners</Typography>
        <Wrapper className={s.wrapper}>
          <Container className={s.container}>
            <Partner1 className={s.cardWrapper} />
            <Typography className={clsx(s.logo1, s.logo)}>core construction</Typography>
          </Container>
          <Container className={s.container}>
            <Partner2 className={s.cardWrapper} />
            <Typography className={clsx(s.logo2, s.logo)}>tropic inc.</Typography>
          </Container>
          <Container className={s.container}>
            <PartnerLogo className={s.cardWrapper} />
            <Typography className={clsx(s.logo3, s.logo)}>cover up</Typography>
          </Container>
          <Container className={s.container}>
            <Partner4 className={s.cardWrapper} />
            <Typography className={clsx(s.logo4, s.logo)}>goaction</Typography>
          </Container>
          <Container className={s.container}>
            <Partner5 className={s.cardWrapper} />
            <Typography className={clsx(s.logo5, s.logo)}>creepy made</Typography>
          </Container>
          <Container className={s.container}>
            <Partner6 className={s.cardWrapper} />
            <Typography className={clsx(s.logo6, s.logo)}>block construction</Typography>
          </Container>
        </Wrapper>
      </Wrapper>
    </section>
  )
}
