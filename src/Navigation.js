import React from 'react'
import './App.css';
import { Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Planet from './Planet';

import Characters from './Characters'

const Navigation = () => {

  return (
    <div>
        <Container>
        <Nav variant="pills" defaultActiveKey="planet">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/planet">PLANETS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/characters" eventKey="link-1" className="text-muted">CHARACTERS</Nav.Link>
            </Nav.Item>
        </Nav>
        <Routes>
          <Route exact path= '/planet' element={<Planet/>} />
          <Route exact path ='/characters' element={<Characters/>}/>
        </Routes>
        </Container>
        {

        }


    </div>
  )
}

export default Navigation
