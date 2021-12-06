import React from 'react'
import './App.css';
import { Container, Card, Row, Col} from 'react-bootstrap';
import logo from './images/planet_1.svg';
import logo1 from './images/planet_2.svg';
import logo2 from './images/planet_3.svg';
import logo3 from './images/planet_4.svg';
import logo4 from './images/planet_5.svg';
import logo5 from './images/planet_6.svg';
import logo6 from './images/planet_7.svg';
import logo7 from './images/planet_8.svg';
import logo8 from './images/planet_9.svg';
import { Button, Offcanvas, Figure } from 'react-bootstrap';
import { useState } from 'react';
import charac10 from './images/character_10.png';
import charac11 from './images/character_11.png';
import charac12 from './images/character_12.png';
import charac13 from './images/character_13.png';
import charac14 from './images/character_14.png';
import charac15 from './images/character_15.png';




const Planet = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Container >
        <Row>
            

      <Col>
            <Button variant="default" onClick={handleShow}>
            
                <Card>
                    <Card.Img variant="top" src={logo}/>
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo1} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo2} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo3} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo4} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
        </Offcanvas.Body>
      </Offcanvas>

        <Col>
            <Button variant="default" onClick={handleShow}>
                <Card>
                    <Card.Img variant="top" src={logo5} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo6} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo7} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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
                    <Card.Img variant="top" src={logo8} />
                        <Card.Body>
                            <Card.Title>Planet Alpha</Card.Title>
                            <Card.Text>
                            <h6>Pop: 235</h6>
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

export default Planet;
