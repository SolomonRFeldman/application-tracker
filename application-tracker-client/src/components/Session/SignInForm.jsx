import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { postRequest } from '../../apiRequests'

export default function SignInForm({ show, handleClose, setCurrentUser }) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const handleChange = event => setFormData({ ...formData, [event.target.id]: event.target.value })

  const handleSubmit = event => {
    event.preventDefault()

    return postRequest('/signin', { user: formData }).then(({user}) => setCurrentUser(user)) 
  }

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder='Email' type='email' onChange={handleChange} value={formData.email} />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder='Password' type='password' onChange={handleChange} value={formData.password} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button aria-label='Submit Sign In' type='submit'>Sign In</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}