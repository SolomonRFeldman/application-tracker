import React from 'react'
import { ButtonToolbar } from "react-bootstrap";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

export default function SignInBanner({className, setCurrentUser}) {
  return(
		<ButtonToolbar className={className}>
			<SignInButton variant='secondary' setCurrentUser={setCurrentUser} />
			<SignUpButton className='ml-2' variant='info' setCurrentUser={setCurrentUser} />
		</ButtonToolbar>
	)
}