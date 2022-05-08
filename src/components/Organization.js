import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import Ixd from "./asset/ixd.svg";
import Unit from "./asset/unity.svg";
import Goo from "./asset/google-developers.svg";

const Organization = () => {
    return (
        <div className="organization" >
            <div className="main-info" style={{marginTop:"10rem"}}>
                <CardGroup style={{height:"10rem",width:"85rem"}}>
                    <Card style={{marginLeft:"10rem", borderRadius:"1rem"}}>
                        <Card.Img className="card-organ" variant="top" src={Ixd}/>
                        <Card.Body>
                            <Card.Title>IXD</Card.Title>
                            <Card.Text>
                                Served as leader of event coordinator division.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{marginLeft:"5rem", borderRadius:"1rem"}}>
                        <Card.Img className="card-organ" variant="top" src={Unit}/>
                        <Card.Body>
                            <Card.Title>UNITY</Card.Title>
                            <Card.Text>
                                Served as member of event coordinator division.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{marginLeft:"5rem", borderRadius:"1rem"}}>
                        <Card.Img className="card-organ" variant="top" src={Goo}/>
                        <Card.Body>
                            <Card.Title>GDSC</Card.Title>
                            <Card.Text>
                                Served as member.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}

export default Organization