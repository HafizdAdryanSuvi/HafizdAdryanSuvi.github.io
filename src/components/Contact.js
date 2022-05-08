import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Whats from "./asset/whatsapp.svg"
import Inst from "./asset/instagram.svg"
import  Face from "./asset/facebook.svg"
import Twi from "./asset/twitter.svg"

const Contact = () => {
    return (
        <div className="contact" style={{background:"yellow"}}>
            <div className="main-info">
                <h1 style={{marginTop:"10rem"}}><br/>Want to know more about me?</h1>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <img src={Whats} alt="" style={{height:"5rem"}}/>
                            <h3><br/>0822-1721-0882</h3>
                        </Col>
                        <Col>
                            <img src={Inst} alt="" style={{height:"5rem"}}/>
                            <br/>
                            <Button className="button-contact" style={{background:"yellow", borderColor:"yellow", color:"#282c34"}}
                                    href="https://www.instagram.com/hfzd.a/?hl=en"><h3><br/>@hfzd.a</h3></Button>
                        </Col>
                        <Col>
                            <img  src={Face} alt="" style={{height:"5rem"}}/>
                            <br/>
                            <Button className="button-contact" style={{background:"yellow", borderColor:"yellow", color:"#282c34"}}
                                    href="https://www.facebook.com/profile.php?id=100015075125677"><h3><br/>Hafizd Adryan</h3></Button>
                        </Col>
                        <Col>
                            <img src={Twi} alt="" style={{height:"5rem"}}/>
                            <Button className="button-contact" style={{background:"yellow", borderColor:"yellow", color:"#282c34"}}
                                    href="https://twitter.com/AdryanHafizd"><h3><br/>@Adryan_Hafizd</h3></Button>
                            <br/>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Contact