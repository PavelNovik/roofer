import { Typography } from '@/components/ui/typography/typography'
import { ControlledInput } from '@/components/ui/controlled/controlledInput'
import { Button } from '@/components/ui/button/button'
import { useForm } from 'react-hook-form'
import s from './form.module.scss'

type FormDataT = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}
export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataT>({
    defaultValues: { email: '', firstName: '', lastName: '', phoneNumber: '', message: '' },
  })
  const onSubmit = (data: FormDataT) => {
    console.log(data)
    reset()
  }
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.formTitle}>Get started</Typography>
      <ControlledInput
        control={control}
        errorMessage={errors.firstName?.message}
        label={'First Name'}
        name={'firstName'}
      />
      <ControlledInput
        control={control}
        errorMessage={errors.lastName?.message}
        label={'Last Name'}
        name={'lastName'}
      />
      <ControlledInput
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <ControlledInput
        control={control}
        errorMessage={errors.phoneNumber?.message}
        label={'Phone number'}
        name={'phoneNumber'}
      />
      <ControlledInput
        control={control}
        errorMessage={errors.message?.message}
        label={'Message'}
        name={'message'}
      />

      <Button type={'submit'}>Let’s get started</Button>
    </form>
  )
}
