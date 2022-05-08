import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const About = () => {
    return (
        <div className="about">
            <Container style={{marginTop:"4.5rem"}}>
                <Row>
                    <Col>
                        <div className="bio">
                            <p className="title"><br/>Full Name:</p>
                            <p>Hafizd Adryan Suvi</p>
                            <p className="title">Place of Birth:</p>
                            <p>Pekanbaru, March 2nd, 2002</p>
                            <p className="title">A little about me:</p>
                            <p>I’m highly motivated and excellent at solving complex problem. <br/>
                                Even tough I’m a quite person, I always straight forward with my word. <br/>
                                I’m rarely get bored and will always do my work till it’s done. <br/>
                                I can handle a team very well and take a decision very wisely.</p>
                            <br/>
                            <></>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-button" style={{marginTop:"2rem"}}>
                            <Link to="/gallery" className="nav-link">
                                <Button className="gallery" style={{fontSize:"1.2rem", borderRadius:"1rem", fontFamily:"sans-serif"}} variant={"dark"}>
                                    Gallery
                                </Button>
                            </Link>
                            <Link to="/organization" className="nav-link">
                                <Button className="gallery" style={{fontSize:"1.2rem", borderRadius:"1rem"}} variant={"dark"}>
                                    Organization
                                </Button>
                            </Link>
                            <Link to="/experience" className="nav-link">
                                <Button className="gallery" style={{fontSize:"1.2rem", borderRadius:"1rem"}} variant={"dark"}>
                                    Experience
                                </Button>
                            </Link>
                            <Link to="/hobby" className="nav-link">
                                <Button className="gallery" style={{fontSize:"1.2rem", borderRadius:"1rem"}} variant={"dark"}>
                                    Hobby
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About