import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function ModalButton(props) {
  const [showModal, setShowModal] = useState(false)

  const handleModalShow = () => setShowModal(true)
  const handleModalClose = () => setShowModal(false)

  return (
    <React.Fragment>
      <Button 
        className={props.className} 
        aria-label={props['aria-label']} 
        variant={props.variant} 
        onClick={handleModalShow}
      >
        {props.children}
      </Button>
      <props.modal show={showModal} handleClose={handleModalClose} {...props}/>
    </React.Fragment>
  )
}