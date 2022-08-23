import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, InputGroup, Navbar, Nav } from "react-bootstrap";
import '../css/FormPage.css';


function FormPage() {
  return (

    <div>

      {/* -------------------------------------------------- */}
      {/* ---------- ####### NAV BAR START #######---------- */}
      {/* -------------------------------------------------- */}
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className='nav-bar-edit'>
        <Container>
          <Navbar.Brand>Form</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Navbar.Text className="nav-component nav-user-name">

              </Navbar.Text>
              <Link to="/" className="btn btn-primary mr-2 nav-component nav-link-btn ">Table</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ------------------------------------------------ */}
      {/* ---------- ####### NAV BAR END #######---------- */}
      {/* ------------------------------------------------ */}



      <div className='page vertically-center'>
        <div className="container">
          <div className="filter-container mb-5">


            {/* ----------------------------------------------- */}
            {/* ---------- ####### FORM START #######---------- */}
            {/* ----------------------------------------------- */}
            <Form className='p-4 p-sm-4 filter-section filter-form'>
              <h1 className='font-weight-bold text-center pb-4 login-form-header'>
                Form Template
              </h1>

              <Row>
                <Col>
                  <Form.Group className="mb-4" controlId="formProductName">
                    <Form.Label>Name</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Product Name"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-4" controlId="formProductDesc">
                    <Form.Label>Description</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Description"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4" controlId="formProductQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="Quantity"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button variant="success" type="Submit" className="filter-btn">
                  Insert
                </Button>
              </div>

            </Form>
            {/* --------------------------------------------- */}
            {/* ---------- ####### FORM END #######---------- */}
            {/* --------------------------------------------- */}


          </div>
        </div>
      </div>

    </div>
  )
}

export default FormPage