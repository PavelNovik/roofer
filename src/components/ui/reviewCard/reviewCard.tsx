import s from './reviewCard.module.scss'
import { Card } from '@/components/ui/card/card'
import clsx from 'clsx'
import { Typography } from '@/components/ui/typography/typography'
import { Wrapper } from '@/components/ui/wrapper/wrapper'
import userIcon from '@/assets/img/Ellipse35.svg'
import { Star } from '@/assets/icons/star'

type PropsT = {
  content: string
  className?: string
}
export const ReviewCard = (props: PropsT) => {
  const { content, className } = props
  return (
    <Card className={clsx(s.reviewCard, className)}>
      <Typography className={s.context}>{content}</Typography>
      <Wrapper>
        <img alt={'user'} src={userIcon} />
        <Wrapper>
          <Typography>Kelly Garcia</Typography>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Wrapper>
      </Wrapper>
    </Card>
  )
}
