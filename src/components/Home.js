import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile1 from "./asset/home_profile.png"
import {Container, Row, Col, Card, Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="main-home">
                <Container className="home-content">
                    <Row>
                        <Col>
                            <Image className='img-fluid shadow-2-strong' src={Profile1}
                                   alt=''/>
                        </Col>
                        <Col>
                            <Card style={{ background:"yellow",width: '40rem', height: '0rem', textAlign:'left', fontSize:"2rem"}}>
                                <Card.Body>
                                    <Card.Title><h1 style={{fontSize:"5rem"}}>Hi,</h1><h4 style={{fontSize:"3rem"}}>I'm Hafizd</h4></Card.Title>
                                    <Card.Text>
                                        Just started learning about framework. Decent at HTML, beginner at JS and CSS.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Link to="/form" className="nav-link">
                    <Button className="form-button" style={{fontSize:"1.5rem", borderRadius:"1rem"}} variant={"dark"}>
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Home