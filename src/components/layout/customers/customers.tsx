import s from './customers.module.scss'
import { Typography } from '@/components/ui/typography/typography'
export const Customers = () => {
  return (
    <section className={s.customers}>
      <Typography className={s.title}>Homeowners reviews</Typography>
      <Typography className={s.headerTitle}>Our happy customers</Typography>
    </section>
  )
}
