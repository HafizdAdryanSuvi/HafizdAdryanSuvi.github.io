import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import cla1 from "../components/asset/img/cla1.jpg"
import cla2 from "../components/asset/img/cla2.jpg"
import cla3 from "../components/asset/img/cla3.jpg"
import cla4 from "../components/asset/img/cla4.jpg"

const Class = () => {
    return (
        <div className="class">
            <div className="main-info" style={{width:"80rem", paddingLeft:"15rem"}}>
                <h1 style={{padding:"2rem", background:"yellow", marginTop:"1rem"}}>Class Gallery</h1>
                <Row>
                    <Col>
                        <Card>
                            <Image src={cla1}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={cla2}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Image src={cla3}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={cla4}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Class