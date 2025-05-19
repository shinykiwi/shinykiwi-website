import * as React from 'react';
import Container from '@mui/material/Container';
import Resume from "./pdfs/KiraFountain-Resume-2025.pdf";
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

                <Project link={"/code/academic-master"} image={"academic-master/am-03.png"} title={"Academic Master"}
                         description={"An educational game, teaching teachers how to teach, made in 36 hours. I was one of three programmers."}
                         tagline={"Experiment with teaching strategies!"}
                />

                <Project link={"/code/the-situation"} image={"the-situation/situation_09.png"} title={"The Situation"}
                         description={"A meta game about our game design class, made over the course of 4 weeks. Two people worked on this project, myself as the programmer."}
                         tagline={"Too meta? I doubt it."}
                />

                <Project link={"/code/the-lemon-game"} image={"lemon-game/lemon-game-01.png"} title={"Lemon Game"}
                         description={"This game is still in-development. It was originally made for an experimental game class over the course of 4 weeks. Two people worked on this project, myself as the programmer."}
                         tagline={"When life gives you lemons...then what?"}
                />

                <Project link={"/code/sleepy-haven"} image={"sleepy-haven/sleepy_01.png"} title={"Sleepy Haven"}
                         description={"This game was made for a game class over the course of 4 weeks. This was my first attempt at a narrative game. Two people worked on this project, myself as the programmer."}
                         tagline={"Eerie 3D narrative game about hidden identities."}
                />

                <Project link={"/code/starlit-catch"} image={"starlit-catch/starlit-catch_01.png"}
                         title={"Starlit Catch"}
                         description={"This game was made for GAMERella 2024 jam within the 36 hours given. The theme for this competition was “Hearth”, and we worked in a team of 5. I worked as a programmer and tech artist."}
                         tagline={"Cozy night fishing game round a campfire."}
                />

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