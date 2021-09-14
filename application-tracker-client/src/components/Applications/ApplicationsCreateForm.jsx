import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { postRequest } from "../../apiRequests";

export default function ApplicationsCreateForm({ show, handleClose, currentUser }) {
  const [formData, setFormData] = useState({})
  const handleChange = event => setFormData({ ...formData, [event.target.id]: event.target.value })

  const handleSubmit = event => {
    event.preventDefault()
    
    return postRequest(`/users/${currentUser.id}/applications`, { application: { date_applied: new Date(), ...formData } }).then(handleClose) 
  }

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Application</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId='organization_name'>
            <Form.Label>Organization Name</Form.Label>
            <Form.Control placeholder='Organization Name' type='text' onChange={handleChange} value={formData.organization_name} />
          </Form.Group>
          <Form.Group controlId='purpose'>
            <Form.Label>Position</Form.Label>
            <Form.Control placeholder='Position' type='text' onChange={handleChange} value={formData.purpose} />
          </Form.Group>
          <Form.Group controlId='url'>
            <Form.Label>Job Description Link</Form.Label>
            <Form.Control placeholder='Job Description Link' type='text' onChange={handleChange} value={formData.url} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button aria-label='Submit New Application' type='submit'>Create Application</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}