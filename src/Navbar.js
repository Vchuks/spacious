import React from 'react';
import './App.css';
import {Container, Row, Navbar} from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <div>
        <Container>
            <Row>
            <Navbar expand="lg" >
                <Navbar.Brand href="#">Spacious</Navbar.Brand>
            </Navbar>
            </Row>
        </Container>
    </div>
  )
}

export default Navigationbar;
