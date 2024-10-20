import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Input, InputProps } from '@/components/ui/input/input'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'onValueChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, defaultValue, name, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <Input id={name} {...rest} name={name} value={value} onChange={onChange} />
}
