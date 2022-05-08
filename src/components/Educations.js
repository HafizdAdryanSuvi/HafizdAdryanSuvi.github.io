import React from "react";
import {Accordion, Button} from "react-bootstrap"

const Educations = () => {
    return (
        <div className="educations">
            <div className="main-info">
                <center>
                    <h1 style={{marginTop:"2rem", background:"yellow", padding:"2rem"}}>My Educations</h1>
                <Accordion style={{height:"30",width:"60rem", marginTop:"3rem"}} >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>Elementary School</h4></Accordion.Header>
                        <Accordion.Body>
                            <h5>SD Islam As-Shofa</h5>
                            <h6>2008-2014</h6>
                            <Button variant="dark" href="https://asshofa.sch.id/">Learn More</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h4>Junior High School</h4></Accordion.Header>
                        <Accordion.Body>
                            <h5>SMPIT Al-Izhar</h5>
                            <h6>2014-2017</h6>
                            <Button variant="dark" href="https://dapo.kemdikbud.go.id/sekolah/DC8AE9163E660855F872">Learn More</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h4>Senior High School</h4></Accordion.Header>
                        <Accordion.Body>
                            <h5>MAN 2 Pekanbaru</h5>
                            <h6>2017-2020</h6>
                            <Button variant="dark" href="https://m2mpekanbaru.sch.id/MAN2/">Learn More</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header ><h4>College</h4></Accordion.Header>
                        <Accordion.Body>
                            <h5>UIN SUSKA RIAU</h5>
                            <h6>2020-Now</h6>
                            <Button variant="dark" href="https://www.uin-suska.ac.id/">Learn More</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </center>
            </div>
        </div>
    )
}

export default Educations