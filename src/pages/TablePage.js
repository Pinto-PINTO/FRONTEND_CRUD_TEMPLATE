import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Table, Container, Row, Col, Button, Form, InputGroup, Navbar, Nav } from "react-bootstrap";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../css/TablePage.css';
import Footer from './Footer';
import { MdDeleteForever } from "react-icons/md"
import { RiPencilFill } from "react-icons/ri"
// import '../css/Table.css';


function TablePage() {

  // MUI Modal States
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal Form Styling
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (

    <div>

      {/* -------------------------------------------------- */}
      {/* ---------- ####### NAV BAR START #######---------- */}
      {/* -------------------------------------------------- */}
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className='nav-bar-edit'>
        <Container>
          <Navbar.Brand>Table</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Navbar.Text className="nav-component nav-user-name">

              </Navbar.Text>
              <Link to="/form" className="btn btn-primary mr-2 nav-component nav-link-btn ">Form</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ------------------------------------------------ */}
      {/* ---------- ####### NAV BAR END #######---------- */}
      {/* ------------------------------------------------ */}



      {/* ------------------------------------------------ */}
      {/* ---------- ####### TABLE START #######---------- */}
      {/* ------------------------------------------------ */}
      <div className='content'>

        <h1 className='table-name'>
          <span>Table Name</span>
        </h1>
        <h2 className='table-info'>
          Include a brief table description in the section here.
        </h2>

        <table className="table-container">
          <thead className='table-column'>
            <tr>
              <th><h1>Column 1</h1></th>
              <th><h1>Column 2</h1></th>
              <th><h1>Column 3</h1></th>
              <th><h1>Column 4</h1></th>
              <th><h1>Column 5</h1></th>
              <th><h1>Column 6</h1></th>
              <th><h1>Column 7</h1></th>
              <th><h1>Column 8</h1></th>
              <th><h1>Column 9</h1></th>
              <th><h1>Column 10</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td>
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
            <tr className='text-center'>
              <td>Row Name</td>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
              <td>Row 5</td>
              <td>Row 6</td>
              <td>Row 7</td>
              <td>Row 8</td> 
              <td>
                <Button className="delete-edit">
                  <MdDeleteForever />
                </Button>
                <Button variant="secondary" className="update-edit" onClick={(e) => { handleOpen(); }}>
                  <RiPencilFill />
                </Button>

                {/* -------------------------------------------------------- */}
                {/* ---------- ####### MODAL SECTION START #######---------- */}
                {/* -------------------------------------------------------- */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>

                    <Container className="table-modal-container">

                      {/* ------------------------------------------------------ */}
                      {/* ---------- ####### UPDATE FORM START #######---------- */}
                      {/* ------------------------------------------------------ */}
                      <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                        <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                          UPDATE FORM
                        </h1>

                        {/* ------------- Update Form START -------------*/}

                        <Row>
                          <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                              <Form.Label>Product Name</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  type="text"
                                  placeholder="Product Name"
                                  value="ES344 Drill"
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
                                  value="Power Electric Drill"
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
                                  value="15"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* ------------- Update Form END ------------- */}

                        <div className="d-grid gap-2">
                          <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
                            Update
                          </Button>
                        </div>
                      </Form>
                      {/* ---------------------------------------------------- */}
                      {/* ---------- ####### UPDATE FORM END #######---------- */}
                      {/* ---------------------------------------------------- */}

                    </Container>

                  </Box>
                </Modal>
                {/* ------------------------------------------------------ */}
                {/* ---------- ####### MODAL SECTION END #######---------- */}
                {/* ------------------------------------------------------ */}

              </td>
            </tr>
          </tbody>
        </table>
      </div >
      {/* ---------------------------------------------- */}
      {/* ---------- ####### TABLE END #######---------- */}
      {/* ---------------------------------------------- */}

      <Footer />

    </div>


  )
}

export default TablePage