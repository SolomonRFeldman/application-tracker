import ModalButton from '../Modal/ModalButton'
import SignInForm from './SignInForm'

export default function SignInButton(props) {
  const modal = (props) => <SignInForm {...props} />

  return(
    <ModalButton aria-label='Sign In' modal={modal} {...props}>Sign In</ModalButton>
  )
}