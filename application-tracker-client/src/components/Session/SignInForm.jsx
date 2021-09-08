import React from 'react'

export default function SignInForm() {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return(
    <form onSubmit={handleSubmit}>
      <label for={"email"}> Email </label>
      <input id={"email"} type={"email"} />
      <br />
      <label for={"password"}> Password </label>
      <input id={"password"} type={"password"} />
      <br />
      <input type="submit" value="Sign In" />
    </form>
  )
}