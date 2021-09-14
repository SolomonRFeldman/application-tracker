import React, { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap";
import { getRequest } from "../../apiRequests";

export default function ApplicationsIndex({currentUser}) {
  const [applications, setApplications] = useState([])
console.log(applications)

  useEffect(() => {
    if(currentUser) {
      getRequest(`/users/${currentUser.id}/applications`).then((applications) => setApplications(applications))
    }
  }, [currentUser])
  return(
    <ListGroup>
      { applications.map((application) => {
        return(
          <ListGroup.Item>
            {application.organization_name} -
            - {application.purpose} -
            - {new Date(application.date_applied).toLocaleDateString('en-US')} -
            - <a href={application.url}>Job Description</a> -
            - {application.status}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}