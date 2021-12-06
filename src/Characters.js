import React from 'react'
import './App.css';
import { useState } from 'react';
import { Container, Figure, Offcanvas, Button, Card, Row, Col} from 'react-bootstrap';
import charac1 from './images/character_1.png';
import charac2 from './images/character_2.png';
import charac3 from './images/character_3.png';
import charac4 from './images/character_4.png';
import charac5 from './images/character_5.png';
import charac6 from './images/character_6.png';
import charac7 from './images/character_7.png';
import charac8 from './images/character_8.png';
import charac9 from './images/character_9.png';
import charac10 from './images/character_10.png';
import charac11 from './images/character_11.png';
import charac12 from './images/character_12.png';
import charac13 from './images/character_13.png';
import charac14 from './images/character_14.png';
import charac15 from './images/character_15.png';

const Characters = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container >
        <Row >
            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card>
                    <Card.Img variant="top" src={charac1} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac2} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac3} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac4} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac5} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac6} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac7} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card >
                    <Card.Img variant="top" src={charac8} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

            <Col>
            <Button variant="default" onClick={handleShow}>
                <Card>
                    <Card.Img variant="top" src={charac9} id="people"/>
                        <Card.Body>
                            <Card.Title>Brooklyn Simons</Card.Title>
                            <Card.Text>
                            <h6>23 Friends</h6>
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Button>
            </Col>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="card-display">
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className="text-muted" id=" card-display-text">
                Planet Alpha is the place to be if you like everything related to planets.
                I know it's a bit meta, but come see by yourself.
                </Card.Text>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">Population</Card.Subtitle>
                <Card.Subtitle id="card-display-subtitle" className=" mb-2">234</Card.Subtitle>
            </Card.Body>
        </Card>

        <h5 className="my-5">CHARACTERS</h5>
      
        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac10}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac11}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac12}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Dariene Robertson</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac13}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac14}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>

        <Figure>
          <Row>
            <Col>
              <Figure.Image
              width={72}
              height={72}
              alt="171x180"
              src={charac15}
              />
              </Col>
              
              <Col>
                <Figure.Caption>
                  <h5>Kathryn Murphy</h5>
                  <h6>23 Friends</h6>
                </Figure.Caption>
              </Col>
          </Row>
        </Figure>
        </Offcanvas.Body>
      </Offcanvas>

        </Row>
        
      </Container>
    </div>
  )
  
}

export default Characters;
