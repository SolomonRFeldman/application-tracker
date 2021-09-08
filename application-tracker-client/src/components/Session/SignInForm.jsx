import React, { useState } from 'react'
import { postRequest } from '../../apiRequests'

export default function SignInForm() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const handleChange = event => setFormData({ ...formData, [event.target.id]: event.target.value })

  const handleSubmit = event => {
    event.preventDefault()

    return postRequest('/signin', { user: formData })
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor={"email"}> Email </label>
      <input id={"email"} type={"email"} onChange={handleChange} />
      <br />
      <label htmlFor={"password"}> Password </label>
      <input id={"password"} type={"password"} onChange={handleChange} />
      <br />
      <input type="submit" value="Sign In" />
    </form>
  )
}