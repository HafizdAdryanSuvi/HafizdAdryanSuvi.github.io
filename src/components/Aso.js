import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import aso1 from "../components/asset/img/aso1.jpg"
import aso2 from "../components/asset/img/aso2.jpg"
import aso3 from "../components/asset/img/aso3.jpg"
import aso4 from "../components/asset/img/aso4.jpg"

const Aso = () => {
    return (
        <div className="aso">
            <div className="main-info" style={{width:"80rem", paddingLeft:"15rem"}}>
                <h1 style={{padding:"2rem", background:"yellow", marginTop:"1rem"}}>Asomatif Gallery</h1>
                <Row>
                    <Col>
                        <Card>
                            <Image src={aso1}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={aso2}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Image src={aso3}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Image src={aso4}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Aso