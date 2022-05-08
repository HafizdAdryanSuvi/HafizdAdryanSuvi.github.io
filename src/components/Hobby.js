import React from "react";
import {Tab, Tabs} from "react-bootstrap";

const Hobby = () => {
    return (
        <div className="hobby">
            <center>
            <h1 style={{marginTop:"2rem", background:"yellow", padding:"2rem"}}>Hobby</h1>
            <div className="main-info" style={{marginTop:"2rem", width:"60rem"}}>
                <Tabs defaultActiveKey="watching" variant="tabs" style={{fontSize:"1.5rem"}}>
                    <Tab eventKey="watching" title="Watching Film" style={{fontSize:"1.2rem", marginTop:"1rem"}}>
                        I like all kind of film, but i mainly watch Hollywood blockbuster and a lot of Anime.<br/>
                        As of today I've already watch about 1000 episode of Anime. My favorite film probably<br/>
                        would be <b>Spider-Man: Into The Spider-Verse</b> and for the anime, the series one would be<br/>
                        <b>Clannad</b>. For movie I like <b>Koe no Katachi</b> a lot.
                    </Tab>
                    <Tab eventKey="exc" title="Music" style={{fontSize:"1.2rem", marginTop:"1rem"}}>
                        My music taste is very random from Metal to Pop to Rap and sometimes Lo-Fi. When I listen<br/>
                        to music i don't judge it by the artist, but rather if I'm vibing with it or not. If I like it,<br/>
                        I start looking at they discography for more banger. I can play some instrument too, I'm good<br/>
                        at guitar, great at drum, and decent at piano.
                    </Tab>
                    <Tab eventKey="game" title="Video Games" style={{fontSize:"1.2rem", marginTop:"1rem"}}>
                        Video games has been always part of my life. My first that i remember probably <b>GTA: San Andreas</b>.<br/>
                        From there my passion for game still growing until now. My favorite game is definitely the <b>Assassins<br/>
                        Creed franchise</b>. Started playing from <b>Assassins Creed Brotherhood</b> on PS3. It got<br/>
                        everything i like about game, the story, adventure, and free roaming.
                    </Tab>
                </Tabs>
            </div>
            </center>
        </div>
    )
}

export default Hobby