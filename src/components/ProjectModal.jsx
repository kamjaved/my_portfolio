import React from 'react';
import { Modal, Button} from "react-bootstrap";

const ProjectModal =(props)=>{

return (

<Modal show={props.show} onHide={props.onHide}>
 {console.log(props)}
  <Modal.Header closeButton>
    <Modal.Title>{props.data && props.data.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>{props.data && props.data.codeLink }</Modal.Body>
  
</Modal>
)
}

export default ProjectModal