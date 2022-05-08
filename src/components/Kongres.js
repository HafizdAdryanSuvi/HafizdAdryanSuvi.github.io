import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import kon1 from "../components/asset/img/kon1.JPG"
import kon2 from "../components/asset/img/kon2.JPG"
import kon3 from "../components/asset/img/kon3.JPG"
import kon4 from "../components/asset/img/kon4.JPG"

const Kongres = () => {
    return (
        <div className="kongres">
            <div className="main-info" style={{width:"80rem", paddingLeft:"15rem"}}>
                <h1 style={{padding:"2rem", background:"yellow", marginTop:"1rem"}}>Kongres Gallery</h1>
                <Row>
                    <Col>
                        <Card>
                            <Image src={kon1}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={kon2}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Image src={kon3}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={kon4}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Kongres