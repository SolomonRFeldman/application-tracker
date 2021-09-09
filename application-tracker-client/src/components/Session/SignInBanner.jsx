import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function SignInBanner({setCurrentUser}) {
  return(
		<>
			<SignInForm setCurrentUser={setCurrentUser} />
			<SignUpForm setCurrentUser={setCurrentUser} />
		</>
	)
}