import { Wrapper } from '@/components/ui/wrapper/wrapper'
import s from './service.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import { ServiceCard } from '@/components/ui/serviceCard/serviceCard'

export const Service = () => {
  return (
    <section className={s.service}>
      <Wrapper className={s.serviceWrapper}>
        <Typography className={s.title}>Our Services</Typography>
        <Typography className={s.headerTitle}>What we provide</Typography>
        <Wrapper>
          <ServiceCard />
        </Wrapper>
      </Wrapper>
    </section>
  )
}
