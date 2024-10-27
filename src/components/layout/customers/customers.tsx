import s from './customers.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import { Wrapper } from '@/components/ui/wrapper/wrapper'
import { ReviewCard } from '@/components/ui/reviewCard/reviewCard'
export const Customers = () => {
  return (
    <section className={s.customers}>
      <Wrapper className={s.customersWrapper}>
        <Typography className={s.title}>Homeowners reviews</Typography>
        <Typography className={s.headerTitle}>Our happy customers</Typography>
        <Wrapper className={s.cardsWrapper}>
          <ReviewCard
            content={
              '"A pellen tesque pretium feugiat vel mobi sagittis lorem habi tasse cursus ipsum quis nec eget facilisis. Quis nibh ut bindum nisl quis placerat proin tortor mattis."'
            }
          />
          <ReviewCard
            content={
              '"Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis. Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque."'
            }
          />
          <ReviewCard
            content={
              '"Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque. Feugiat hac porttitor sem dictum velit, elementum odio sed eget facilisis."'
            }
          />
        </Wrapper>
      </Wrapper>
    </section>
  )
}
