import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap"

const Form1 = () => {
    return (
        <Container style={{marginTop:"2rem"}}>
            <Row>
                <Col>

                </Col>
                <Col>
                    <div className="form">
                        <div className="main-info">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="textpersonname" placeholder="Full Name"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control type="text" style={{height:"20rem"}}/>
                                </Form.Group>

                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}

export default Form1