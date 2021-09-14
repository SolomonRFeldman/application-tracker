import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { postRequest } from '../../apiRequests'

export default function SignUpForm({ show, handleClose, setCurrentUser }) {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', password_confirmation: '' })
  const handleChange = event => setFormData({ ...formData, [event.target.id]: event.target.value })

  const handleSubmit = event => {
    event.preventDefault()

    return postRequest('/signup', { user: formData }).then(({user}) => setCurrentUser(user)) 
  }

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder='Username' type='text' onChange={handleChange} value={formData.username} />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder='Email' type='email' onChange={handleChange} value={formData.email} />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder='Password' type='password' onChange={handleChange} value={formData.password} />
          </Form.Group>
          <Form.Group controlId='password_confirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control placeholder='Password Confirmation' type='password' onChange={handleChange} value={formData.password_confirmation} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button aria-label='Submit Sign Up' type='submit'>Sign Up</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}