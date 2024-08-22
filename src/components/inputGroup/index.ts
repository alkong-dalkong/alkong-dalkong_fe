import { CheckBox, CheckBoxAll } from './CheckBox'
import { Container } from './Container'
import { ErrorMessage } from './ErrorMessage'
import { Gender } from './Gender'
import { Input, TextArea } from './Input'
import Stepper from './Stepper'

export const InputGroup = Object.assign(Container, {
  Input,
  TextArea,
  Gender,
  CheckBox,
  CheckBoxAll,
  ErrorMessage,
  Stepper,
})
