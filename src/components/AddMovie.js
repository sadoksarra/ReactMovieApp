import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const AddMovie = ({addNewMovie}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputs, setInputs] = useState({
        id : '',
        Title : '' ,
        rate : '',
        description : '',
        PosterUrl : '',
    })

    const handleChange = (e) => {
      setInputs({...inputs,[e.target.name] : e.target.value })
    }

    const handleAdd = () => {
      addNewMovie(inputs);
    }

	return (
        <>
       <div className='ShowButton' >
        <Button variant="primary" onClick={handleShow}  >
          Add Movie
        </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Row>
            <Form.Label column lg={2}>
              ID
            </Form.Label>
            <Col>
              <Form.Control type="number" placeholder="ID" name='id' onChange={handleChange}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Form.Label column lg={2}>
              Title
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Title" name='Title' onChange={handleChange} />
            </Col>
          </Row>
          <br/>
          <Row>
            <Form.Label column lg={2}>
              Rate
            </Form.Label>
            <Col>
              <Form.Control type="number" placeholder="Rate" name='rate' onChange={handleChange}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Form.Label column lg={2}>
            Description
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Description" name='description' onChange={handleChange} />
            </Col>
          </Row>
          <br/>
          <Row>
          <Form.Label column lg={2}>
          PosterUrl
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="PosterUrl" name='PosterUrl' onChange={handleChange}/>
          </Col> 
        </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd} >
              Add New Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
	);
};

export default AddMovie ;