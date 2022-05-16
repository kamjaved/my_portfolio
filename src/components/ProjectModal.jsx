import React from 'react';
import { Modal, Button, Container, Badge } from 'react-bootstrap';
import { urlFor } from '../client.js';

import './ProjectModal.scss';

const ProjectModal = props => {
  return (

      <Modal
        size="xl"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalBS"
        tabindex="-1"
        show={props.show}
        onHide={props.onHide}
      >
        
         
            <Modal.Header className="modal-header" closeButton>
              <Modal.Title className="modal-title" id="contained-modal-title-vcenter" >
                {props.data && props.data.title}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body">
              <div className="row g-0">
                <div className="col-md-8 border-right ">
                  <div className="status p-3">
                    <table className="table table-borderless">
                      <tbody>
                        <tr className='d-flex justify-content-between'>
                          <td >
                            <div className="flex-column">
                              <span className="heading d-block">Client</span>
                              <span className="subheadings">
                              {props.data && props.data.client}
                              </span>
                            </div>
                          </td>
                          <td >
                            <div className="flex-column">
                              <span className="heading d-block">Duration</span>
                              <span className="subheadings">
                              {props.data && props.data.duration}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex flex-column">
                              <span className="heading d-block">
                                Tools & Technology
                              </span>
                              <span className="subheadings">
                                  {props.data && props.data.tags.map((i)=>(
                                    <>
                                    <Badge pill bg="primary">
                                      {i}
                                    </Badge>
                                     {' '}
                                    </>
                                    
                                  ))}
                              </span>
                            </div>
                          </td>
                          
                        
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex flex-column">
                              <span className="heading d-block">
                                Description
                              </span>
                              <span className="subheadings">
                                {props.data && props.data.description}
                              </span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                        <td>
                            <div className="d-flex flex-column">
                              <span className="heading d-block">
                                Responsibility
                              </span>

                              <span className="subheadings">
                              {props.data && props.data.resposnibility.map((i)=>(
                                <> ◾ {i} <br/> </>
                                   
                                  ))}
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-md-4">
                  <img src={urlFor(props.data && props.data.imgUrl)} alt={props.data && props.data.name} className="projectImage" />
                </div>
              </div>
            </Modal.Body>
        

        {/* {console.log(props)} */}
      </Modal>
  );
};

export default ProjectModal;
