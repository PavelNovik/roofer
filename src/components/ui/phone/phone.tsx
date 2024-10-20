import { Phone1 } from '@/assets/icons/phone1'
import { Typography } from '@/components/ui/typography/typography'
import s from './phone.module.scss'
import clsx from 'clsx'
type PhoneT = {
  className?: string
}

export const Phone = ({ className }: PhoneT) => {
  return (
    <div className={clsx(className, s.phone)}>
      <Phone1 />
      <Typography>(+487) 384 9452</Typography>
    </div>
  )
}
