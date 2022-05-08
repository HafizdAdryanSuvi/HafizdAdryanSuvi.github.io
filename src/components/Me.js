import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import me1 from "../components/asset/img/me1.jpeg"
import me2 from "../components/asset/img/me2.jpeg"
import me3 from "../components/asset/img/me3.jpeg"
import me4 from "../components/asset/img/me4.jpeg"

const Me = () => {
    return (
        <div className="me">
            <div className="main-info" style={{width:"80rem", paddingLeft:"15rem"}}>
                <h1 style={{padding:"2rem", background:"yellow", marginTop:"1rem"}}>Me Gallery</h1>
                <Row>
                    <Col>
                        <Card>
                            <Image src={me1}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={me2}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Image src={me3}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={me4}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Me