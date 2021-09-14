import React from 'react'
import ApplicationsCreateButton from "./ApplicationsCreateButton";
import ApplicationsIndex from "./ApplicationsIndex";

export default function Applications(props) {
  return(
    <div className='Applications'>
      <ApplicationsCreateButton {...props} />
      <ApplicationsIndex {...props} />
    </div>
  )
}