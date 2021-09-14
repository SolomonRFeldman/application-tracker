import React from 'react'
import { Navbar as BootsNav } from 'react-bootstrap'
import SessionBanner from './SessionBanner'

export default function Navbar(props) {
  return(
    <BootsNav bg='gradient-primary' variant='dark' expand='lg' aria-label='Navbar'>
      <BootsNav.Brand >Application Tracker</BootsNav.Brand>
      <BootsNav.Toggle />
      <BootsNav.Collapse>
        <SessionBanner {...props} />
      </BootsNav.Collapse>
    </BootsNav>
  )
}