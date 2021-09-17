import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { patchRequest } from '../../apiRequests'

export default function ApplicationsIndexItem({application, currentUser, applications, setApplications}) {
  const handleStatusClick = event => {
    event.preventDefault()

    const newStatus = application.status === 'pending' ? 'declined' : 'pending'
    patchRequest(`/users/${currentUser.id}/applications/${application.id}`, { application: { status: newStatus } }).then(({application}) => {
      setApplications(applications.map(appItem => appItem.id === application.id ? application : appItem))
    })
  }

  return(
    <ListGroup.Item>
      {application.organization_name} -
      - {application.purpose} -
      - {new Date(application.date_applied).toLocaleDateString('en-US')} -
      - <a href={application.url}>Job Description</a> -
      - <a href='/' onClick={handleStatusClick}>{application.status}</a>
    </ListGroup.Item>
  )
}