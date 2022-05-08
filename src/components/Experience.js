import React from "react";
import {Card} from "react-bootstrap";

const Experience = () => {
    return (
        <div className="experience">
            <div className="main-info">
                <h1 style={{marginTop:"5rem"}}>Experience</h1>
                <Card style={{background:"yellow", marginTop:"5rem", fontSize:"2rem"}}>
                    <Card.Body>
                        <Card.Text>
                            I have demonstrated strong research skills during university project work and much <br/>
                            of my experience has been within a team environment. I am able to take responsibility<br/>
                            for my own work as well as being able to demonstrate leadership when required. Meeting<br/>
                            deadlines has been a consistent part of my academic and working life and I have learned<br/>
                            how to communicate with people in situations which require tact. My academic skills have<br/>
                            given me the ability to communicate effectively on paper as well as through presentations.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Experience