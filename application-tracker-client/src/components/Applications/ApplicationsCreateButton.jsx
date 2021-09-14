import ModalButton from "../Modal/ModalButton";
import ApplicationsCreateForm from "./ApplicationsCreateForm";

export default function ApplicationsCreateButton(props) {
  const modal = (props) => <ApplicationsCreateForm {...props} />

  return(
    <ModalButton aria-label='New Application' modal={modal} {...props}> New Application </ModalButton>
  )
}