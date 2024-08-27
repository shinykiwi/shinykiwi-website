import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import playingGame from "./games/freddyscafe/playing-our-game.png";
import trophies from "./games/prismagame/trophies.png";


import ProjectDisplay from "../ProjectDisplay";

import G0 from "./games/dreamteam/DT5.png";
import G1 from "./games/dreamteam/G1.jpg";
import G3 from "./games/dreamteam/G3.jpg";
import G2 from "./games/dreamteam/DT1.png";
import G4 from "./games/dreamteam/DT2.png";
import G5 from "./games/dreamteam/DT6.png";
import G6 from "./games/dreamteam/DT7.png";
import G7 from "./games/dreamteam/DT8.png";



const containerSpacing = 0;
const xs = 12;
const md = 6;
const lg = 4;


const images = [
    {
        original: G0,
        thumbnail: G0,
    },
    {
        original: G2,
        thumbnail: G2,
    },
    {
        original: G4,
        thumbnail: G4,
    },
    {
        original: G5,
        thumbnail: G5,
    },
    {
        original: G6,
        thumbnail: G6,
    },
    {
        original: G7,
        thumbnail: G7,
    },
    {
        original: G3,
        thumbnail: G3,
    },
    {
        original: G1,
        thumbnail: G1,
    }


];

const pixelArt = [
    {
        id: '0',
        title: 'Blaster',
        image: 'blaster.png',

    },
    {
        id: '1',
        title: 'Grenade Launcher',
        image: 'grenade-launcher.png',

    },

    {
        id: '3',
        title: 'Flamethrower',
        image: 'flamethrower.png',

    },

    {
        id: '4',
        title: 'Hammer',
        image: 'hammer.png',
    },
    {
        id: '5',
        title: 'Cat Front',
        image: 'cat-front.png',
    },
    {
        id: '6',
        title: 'Cat Back',
        image: 'cat-back.png',
    },
    {
        id: '7',
        title: 'Cat Side',
        image: 'cat-side.png',
    },
    {
        id: '8',
        title: 'Dog Front',
        image: 'dog-front.png',
    },
    {
        id: '9',
        title: 'Dog Back',
        image: 'dog-back.png',
    },
    {
        id: '14',
        title: 'Dog Side',
        image: 'dog-side.png',
    },
    {
        id: '13',
        title: 'Purple Mushroom',
        image: 'purple-mushroom.png',
    },


];

export default function DreamTeam() {


    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div >
                        <h1 style={{margin: 0}}>Dream Team</h1>
                        <h4>January - April 2024</h4>

                        <p style={{color: "gray"}}>"Dream Team reporting for duty! Nightmares have once again infiltrated the dream world to try to corrupt it and reach its core. Together, you assume the roles of elite Dream Agents, venturing deep into the sleeper's subconscious to fend off nefarious nightmares. United in purpose, you must synchronize your strategies and unique abilities to maintain the dream’s sanctity. The fate of the dream world depends on it!"
                        </p>
                        <p><br/>This is a 3D online coop game where you must work together to defeat enemies and defend territory by combining weapons. It is an action-based fantasy game made for PC, with controller support. This is Concordia-A's submission for
                            the <a href={"https://montreal.ubisoft.com/en/our-commitments/education/game-lab-competition/"} target={"_blank"}>2024 Ubisoft Game Lab Competition</a>. The conception was based around the theme “Dream” as given by the jury at the start of the competition.
                        </p>


                        <div style={{display: "flex"}}>
                            <div>
                                <h3>Team</h3>
                                <ul>
                                    <a href={"https://tuanabicakci.dev/"}>
                                        <li>
                                            Tuana Bıçakcı (Artist)

                                        </li>
                                    </a>
                                    <a href={"https://github.com/ZaidMinhas"}>
                                        <li>
                                            Zaid Minhas (Programmer)

                                        </li>
                                    </a>
                                    <a href={"https://github.com/allyjenna"}>
                                        <li>
                                            Ally Steinberg (Programmer)

                                        </li>
                                    </a>
                                    <a href={"https://github.com/DragonGawain"}>
                                        <li>
                                            Craig Kogan (Programmer)

                                        </li>
                                    </a>
                                    <a href={"https://github.com/SarahMucci0312"}>
                                        <li>
                                            Sarah Mucci (Programmer)

                                        </li>
                                    </a>
                                    <a href={"https://on.soundcloud.com/qHtDx"}>
                                        <li>
                                            Jacob Meleras (Sound Artist)

                                        </li>
                                    </a>

                                </ul>

                                <h3 style={{fontSize: "26px", marginLeft: "2rem", color: "darkred"}}>+ me!
                                    (programmer)</h3>

                            </div>
                            <div>
                            <h3>Links</h3>
                                <ul>
                                    <a href={"https://github.com/DragonGawain/gamelab"}><li>
                                        <GitHubIcon/>

                                    </li></a>

                                </ul>

                            </div>
                            <div className={"tools"}>
                                <h3>Tools</h3>
                                <div >
                                    <div>
                                        <ul>
                                            <li>
                                                Unity / C#
                                            </li>
                                            <li>Blender</li>
                                            <li>Substance Painter</li>
                                            <li>WWise</li>
                                            <li>Procreate</li>
                                            <li>Mixamo</li>

                                        </ul>
                                    </div>


                                </div>


                            </div>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <iframe width="840" height="475"
                                    src="https://www.youtube.com/embed/FUWlbUMDmJk">
                            </iframe>
                        </div>

                        <div>
                            <ImageGallery items={images} showPlayButton={false} showNav={false} slideDuration={200} showFullscreenButton={false}/>

                        </div>

                        <h3 style={{marginTop: "3rem"}}>Competition Constraints</h3>

                        <p>Several requirements and constraints were given by the jury.</p>
                        <ol className={"constraints"}>
                            <li>Theme is "Dream"</li>
                            <li>Online multiplayer with a coordinated interaction mechanic</li>
                            <li>At least one element that changes with each game session</li>
                            <li>Use AI in at least one mechanic of the game</li>
                            <li>Involve a "running out of..." design concept</li>
                            <li>E10+ rated</li>
                            <li>Include an accessibility feature</li>
                            <li>Include concept art for characters and environment</li>
                        </ol>

                        <h3 style={{marginTop: "3rem"}}>About Gameplay</h3>
                        <p>Players assume the roles of Dream Agents Luna and Ori who venture into dreams to prevent them from becoming nightmares. The key is to  defend the cores of the dream - several crystals spread across the map. The players must fight off three types of enemies in four waves to protect the cores of the dream.
                        </p>
                        <p>Players can choose to play Luna, a feline Dream Agent who possesses dark power, or Ori, a canine Dream Agent who possesses light energy. Luna comes equipped with a grenade launcher weapon that shoots grenades which detonate briefly after landing, and a hammer- a short-ranged weapon that hits enemies caught under it. Ori, on the other hand, wields a blaster type weapon - a simple projectile weapon that shoots- and a flamethrower - a short ranged weapon that has a cone shaped area of effect.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/dream-team-gameplay-loop.png`)} />
                                <h5>Gameplay loop.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>About Enemies</h3>
                        <p>The three types of enemies include a weak enemy, a ghost which players can defeat with their own weapons without need for cooperation. Next, a fusion monster, and a grim reaper enemy which players must cooperate to kill together. The latter has the ability to spawn void-like portals that spawn more enemies. This ability is random.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>My Role</h3>
                        <p>For the majority of the project, I took on the role of fitting all of the pieces together on the code side and joining them with the art side, resolving any technical issues that existed or programmers not understanding how art assets work. Due to my proficiency in programming as well as art, I was able to help out everywhere at any time, wherever help was most needed so my work varied. Below I will describe some of the roles I took on throughout the project.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>Design Choices</h3>

                        <p>Some early designs  of the game were going to be more of a tower defense style game, where enemies would rush in and break apart walls to reach a sleeping person, and as Dream Agents in the real world you’d have to fend them off throughout 5 hours of the night. Most of this concept was scratched, but we kept the idea of having a hammer in the game and the map being a house. We also kept the name of the game!

                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/gamelab-scribbles.png`)} />
                                <h5>Original design sketches.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Programming</h3>

                        <p>At the beginning, it was about making a functioning build which would mean character movement, enemies attacking and dealing damage, player weapons and damage and other fundamentals of the game. The feature that caused the most anxiety at the beginning was networking, making the game a multiplayer experience, so the first thing I did was set up a demo of a client/host setup in the works so that both myself and our team knew that it was doable and not out of our depth.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/multiplayer.png`)} />
                                <h5>Basic demo of client/host setup and movement.</h5>
                            </div>
                        </div>

                        <p>After this, I got a basic gun model in and started playing around with a visual effect for the flamethrower. I believed this was a good way to start getting a feel for the mechanics and the game. I did the same for the blaster gun.</p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/flamethrower-blaster-early.png`)} />
                                <h5>Early, functioning version of flamethrower & blaster.</h5>
                            </div>
                        </div>

                        <p>After this, I started to make the map pieces in Blender then import them to Unity which we wanted to use to randomly generate maps for continuous levels.
                        </p>

                        <p>This didn’t really work as intended as I had gotten the models wrong and the origins were not set up properly. Our mentor also suggested that in the interest of the scope of the project that we not do randomly generated maps. So I then redid the walls properly and created this modular house set that snaps together like lego in the scene editor.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/housepieces.png`)} />
                            </div>
                        </div>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/modularhouse.png`)} />
                                <h5>Modular house kit and example in Unity.</h5>
                            </div>
                        </div>

                        <p>Next, I wanted to set the mood of the game right off the bat so we could build on top of that and everyone was okay with the vibe early on. I started setting up lighting, some basic textures and some early furniture models we had in the Build Scene. I also played with post-processing effects to give it a horror-ish vibe.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/postprocess.png`)} />
                                <h5>Early post processing effects to set the tone.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Environment Art (with Tuana's help)</h3>

                        <p>I ran into a problem after modeling a few furniture items where I didn’t know what else to put in the room in terms of decoration, to make the house feel full and lived in. I decided a good way to plan out this expansive map we had very quickly and inexpensively was to break out The Sims 4 and speed build just like the good old days. The result was, with consultation and suggestions from Tuana, a good base map that I could use to know what to model next.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/sims3.png`)} />
                                <h5>Overhead of the whole map.</h5>
                            </div>
                        </div>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/sims2.png`)} />
                            </div>
                        </div>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/sims1.png`)} />
                                <h5>Closeups of certain rooms.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>3D Modelling</h3>

                        <p>From there, I went and modeled everything that would be needed to create the map as pictured in our Sims 4 concept. Here are some samples of the models that I made.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/somemodels.png`)} />
                                <h5>Various props, furniture and weapons.</h5>
                            </div>
                        </div>

                        <p>Next, I modeled our three enemy types based on Tuana’s concept art.
                        </p>

                        <div className={"blueprint-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/enemyconcepts.png`)} />
                            </div>
                        </div>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/enemymodels.png`)} />
                                <h5>Enemy models modelled/sculpted in Blender.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>UI & Graphic Design</h3>

                        <p>I did some work creating the game logo and mood as told through our user interface, here were some early iterations of the logo and main menu.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/earlylogo.png`)} />
                            </div>
                        </div>

                        <p>Tuana took my logo energy and took it into the spooky direction and made it way better, and I iterated on the main menu like so:
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/menuiteration.png`)} />
                            </div>
                        </div>

                        <h3>Network Config</h3>
                        <p>Finally, another contribution I made was setting up Unity Relay, a free server system that Unity provides for its developers to allow for multiplayer with a limited number of users. This was perfect for our purposes because the game is meant to be a prototype that only two players at once will be playing, in front of the jury.
                            Part of this process involved requesting and receiving codes from the Unity Relay system and displaying that in a user-friendly way for the players to join each other's games with.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/dreamteam/network.png`)} />
                            </div>
                        </div>

                        {/*----------------------------ART DUMP--------------------------*/}

                        <h3 style={{marginTop: "3rem"}} id={"art-dump"}>Art Dump</h3>
                        <p>(The player models, and <strong>all textures</strong> are done by <a href={"https://tuanabicakci.dev"}>Tuana Bicakci.</a> Other models done by me.)</p>
                        <div className={"art-div"}>
                            <Grid container spacing={containerSpacing}>
                                {pixelArt.map((a) => (
                                    <Grid wrap="nowrap" item zeroMinWidth xs={xs} md={md} lg={lg} key={a.id} >
                                        <div className="gallery">
                                            <div className={'container'}>
                                                <img src={require(`./games/gamelab/art/${a.image}`)} alt="gamelab-art" width="600" height="400" className='image'/>
                                                <div className="overlay" style={{padding: "1rem"}}>
                                                    <div className="text"><strong><em>{a.title}</em></strong></div>

                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Reflection</h3>
                        <p>Overall, I would say that this project was a good first game lab attempt. There are many things over the course of the project
                            that I wish had been done differently. For example, we didn't get around to making multiple levels. However, I think the gameplay we achieved <em>felt</em> like it
                            had the potential to be really fun as coop if we tweaked it some more but all in all the game wasn't up to my personal standards of what I believe would have been possible in twelve weeks. I'm still very proud of the art that Tuana and I created though, and I want to
                            commend her for her incredible texture work and concept design. I truly believe the game looked aesthetically on par with other games at the competition
                            all because of her hard work over the course of the lab. Couldn't recommend a better artist to work with. I also want to thank our mentors at Ubisoft for their criticisms and advice early on that would have saved us lots of trouble. Thanks!</p>


                    </div>
                }/>

                <div style={{height: '10rem'}}>
                    <h3 style={{marginTop: "2rem"}} className={"end-article"}>thanks for reading!</h3>
                    <h3 className={"end-article"}>- Kira</h3>

                </div>
            </Container>


        </div>
    );

}