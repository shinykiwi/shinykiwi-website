import * as React from 'react';
import Container from '@mui/material/Container';
import Resume from "./pdfs/KiraFountain-Resume.pdf";
import EmailIcon from '@mui/icons-material/Email';

import Project from "../Project";

const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;


export default function Code() {

    return (
        <div id="art">

            <Container maxWidth={'lg'}>
                <div>
                    <h1>Hi, I'm Kira</h1>
                    <div style={{display: "flex", marginTop: "1rem"}}>

                        <a href={"mailto:kafountain5@gmail.com"}><h3
                            style={{fontFamily: "Patrick Hand, cursive", fontSize: "18px", marginRight: "1rem"}}>
                            <EmailIcon/></h3></a>
                        <a href={Resume} target={"_blank"}><h3
                            style={{fontFamily: "Patrick Hand, cursive", fontSize: "18px"}}>Resume</h3>
                        </a>
                    </div>
                    <p style={{marginBottom: "2rem"}}>I'm a game development student based in Montreal, QC. I'm in my
                        fourth year, studying Computer
                        Science and Computation Arts
                        at <a
                            href={"https://www.concordia.ca/academics/undergraduate/computer-science-comp-arts.html"}>Concordia
                            University</a>.
                        My main focus thus far has been on game programming, however I have a variety of experience
                        with
                        software development, databases, web development and various APIs.
                        Here you can find all my projects related to the world of programming. </p>

                </div>

                <Project link={"/code/academic-weapon"} image={"academic-weapon/aw_03.png"} title={"Academic Weapon"}
                         description={"This game was made for the NAD Creative Jam 2024 within the 48 hours given. The theme for this competition was “Disappear”, and we worked in a team of 3. I worked as a programmer and tech artist."}
                         tagline={"Stealth and strategy game made in Unity."}
                />

                <Project link={"/code/dream-team"} image={"dreamteam/DT5.png"} title={"Dream Team"}
                         description={"This game was made for the 2024 Ubisoft Game Lab, within the 12 weeks given. The theme for this competition was “Dream”, and we worked in a team of 6. I worked as a programmer and 3D artist."}
                         tagline={"Online co-op dream defender game made in Unity."}
                />

                <Project link={"/code/freddys-cafe"} image={"freddyscafe/camera-setup.png"} title={"Freddy's Cafe"}
                description={"This game was made for the GAMERella 2023 game jam, within the 36 hours given. The theme for this game jam was “Extraction”, and immediately we thought of making coffee. All assets and code were made within the duration of the jam (except for the counters, stove and music)."}
                tagline={"Cozy barista simulator made in Unreal Engine."}
                />

                <Project link={"/code/prisma"} image={"prismagame/red-bg.png"} title={"Prisma"}
                         tagline={"Colour changing puzzle platformer."}
                         description={"A 3D platformer game where manipulating the hues of the environment reveals unseen paths and puzzles. Activate all three prism statues to win. This game was made for the Concordia Game Jam 2023, within the 48 hours given. The theme was \"Space in Between\". All assets and code were made within the duration of the jam (except for the music)."}
                />

                <Project link={"/code/1347-game"} image={"game-view-result.png"} title={"1347 Game"}
                         tagline={"Combat adventure about the Black Death."}
                         description={"A combat adventure game for the Montreal Game Jam 2023, where the theme was \"historical event\". You play as a hire by the University of Paris medical faculty, where you work, to help contain the spread of the Black Death plague in a nearby town. Fight the poison air beasts that have been spreading the plague and save the town!"}
                />



            </Container>


            <div style={{height: '10rem'}}/>


        </div>
    );

}