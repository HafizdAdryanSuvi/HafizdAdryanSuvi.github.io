import React from "react";
import {Card, CardGroup, ProgressBar} from "react-bootstrap";
import Java from "./asset/java-icon.svg"
import Andro from "./asset/android-brands.svg"
import Adobe from "./asset/adobe-xd.svg"

const Skills = () => {
    return (
        <div className="skills">
            <div className="main-info" style={{marginTop:"6rem"}}>
                <CardGroup style={{height:"10rem",width:"85rem"}}>
                    <Card style={{marginLeft:"10rem", background:"yellow", borderRadius:"1rem"}}>
                        <Card.Img className="card-skill" variant="top" src={Java}/>
                        <Card.Body>
                            <Card.Title>JAVA</Card.Title>
                            <ProgressBar now={40} variant="danger"/>
                            <br/>
                            <Card.Text>
                                Java is a high-level, class-based, object-oriented programming language that is
                                designed to have as few implementation dependencies as possible.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{marginLeft:"5rem", background:"yellow", borderRadius:"1rem"}}>
                        <Card.Img className="card-skill" variant="top" src={Andro}/>
                        <Card.Body>
                            <Card.Title>ANDROID</Card.Title>
                            <ProgressBar now={50} variant="danger"/>
                            <br/>
                            <Card.Text>
                                Android is a mobile operating system based on a modified version of the Linux kernel
                                and other open source software, designed primarily for touchscreen mobile devices such
                                as smartphones and tablets.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{marginLeft:"5rem", background:"yellow", borderRadius:"1rem"}}>
                        <Card.Img className="card-skill" variant="top" src={Adobe}/>
                        <Card.Body>
                            <Card.Title>ADOBE XD</Card.Title>
                            <ProgressBar now={70} variant="danger"/>
                            <br/>
                            <Card.Text>
                                Adobe XD is a vector-based user experience design tool for web apps and mobile apps,
                                developed and published by Adobe Inc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}

export default Skills