import ModalButton from '../Modal/ModalButton'
import SignUpForm from './SignUpForm'

export default function SignUpButton(props) {
  const modal = (props) => <SignUpForm {...props} />

  return(
    <ModalButton aria-label='Sign Up' modal={modal} {...props}>Sign Up</ModalButton>
  )
}