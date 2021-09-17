import React, { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap";
import { getRequest } from "../../apiRequests";
import ApplicationsIndexItem from "./ApplicationsIndexItem";

export default function ApplicationsIndex({currentUser}) {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    if(currentUser) {
      getRequest(`/users/${currentUser.id}/applications`).then((applications) => setApplications(applications))
    }
  }, [currentUser])

  return(
    <ListGroup>
      { applications.map((application) => {
        return(
          <ApplicationsIndexItem key={application.id} application={application} currentUser={currentUser} applications={applications} setApplications={setApplications} />
        )
      })}
    </ListGroup>
  )
}