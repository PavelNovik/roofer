import s from './about.module.scss'
import { Section } from '@/components/ui/section/section'
import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'
import { Point } from '@/assets/icons/point'
import { Form } from '@/components/ui/form/form'
import { Wrapper } from '@/components/ui/wrapper/wrapper'

export const About = () => {
  return (
    <Section className={s.about} id={'about'}>
      <Wrapper className={s.aboutWrapper}>
        <div className={s.content}>
          <Typography className={clsx(s.sectionTitle)}>QUALITY ROOFING SOLUTIONS</Typography>
          <Typography as={'h1'} className={clsx(s.mainTitle)}>
            Expert roofers at your command
          </Typography>
          <Typography className={clsx(s.aboutParagraph)}>
            Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum. Elit adipiscing
            massa diam in dignissim. Risus tellus libero elementum aliquam etiam. Lectus adipiscing
            est auctor mi quisque nunc non viverra est.
          </Typography>
          <ul className={clsx(s.aboutList)}>
            <li>
              <Point />
              Fully legal licensed and insured
            </li>
            <li>
              {' '}
              <Point />
              100% trustworthy company
            </li>
            <li>
              {' '}
              <Point />
              Most Genuine and transparent
            </li>
          </ul>
        </div>
        <Form />
      </Wrapper>
    </Section>
  )
}
