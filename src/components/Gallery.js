import React from "react";
import {Carousel, Container, Row, Col, Badge} from "react-bootstrap";
import aso1 from "../components/asset/img/aso1.jpg"
import aso2 from "../components/asset/img/aso2.jpg"
import cla1 from "../components/asset/img/cla1.jpg"
import cla2 from "../components/asset/img/cla2.jpg"
import kon1 from "../components/asset/img/kon1.JPG"
import kon2 from "../components/asset/img/kon2.JPG"
import me1 from "../components/asset/img/me1.jpeg"
import me2 from "../components/asset/img/me2.jpeg"

import {Link} from "react-router-dom";

const Gallery = () => {
    return (
        <div className="gallery">
            <Container>
                <div className="carousel" style={{width:"50rem", marginLeft:"25rem"}}>
                    <Row>
                        <Col>
                            <Link to="/aso" className="nav-link">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={aso1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={aso2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/class" className="nav-link">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={cla1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={cla2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/kongres" className="nav-link">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={kon1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={kon2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Me" className="nav-link">
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={me1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={me2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <Badge bg="danger">New</Badge>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Gallery