import { ButtonToolbar } from "react-bootstrap";
import SignInButton from "./SignInButton";

export default function SignInBanner({className, setCurrentUser}) {
  return(
		<ButtonToolbar className={className}>
			<SignInButton variant='secondary' setCurrentUser={setCurrentUser} />
		</ButtonToolbar>
	)
}