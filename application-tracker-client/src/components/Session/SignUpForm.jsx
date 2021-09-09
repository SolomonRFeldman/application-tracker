import { useState } from 'react'
import { postRequest } from '../../apiRequests'

export default function SignInForm({setCurrentUser}) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const handleChange = event => setFormData({ ...formData, [event.target.id]: event.target.value })

  const handleSubmit = event => {
    event.preventDefault()

    return postRequest('/signup', { user: formData }).then(({user}) => setCurrentUser(user)) 
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor={"username"}> Username </label>
      <input id={"username"} type={"text"} onChange={handleChange} />

      <br />

      <label htmlFor={"email"}> Email </label>
      <input id={"email"} type={"email"} onChange={handleChange} />
       
      <br />

      <label htmlFor={"password"}> Password </label>
      <input id={"password"} type={"password"} onChange={handleChange} />

      <br />

      <label htmlFor={"password_confirmation"}> Password Confirmation </label>
      <input id={"password_confirmation"} type={"password"} onChange={handleChange} />

      <br />

      <input type="submit" value="Sign Up" />
    </form>
  )
}