import { Navbar as BootsNav } from 'react-bootstrap'

export default function Navbar() {
  return(
    <BootsNav bg='gradient-primary' variant='dark' expand='lg' aria-label='Navbar'>
      <BootsNav.Brand >Application Tracker</BootsNav.Brand>
      <BootsNav.Toggle />
      <BootsNav.Collapse>
      </BootsNav.Collapse>
    </BootsNav>
  )
}