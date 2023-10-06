import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import GitHubIcon from '@mui/icons-material/GitHub';

import ProjectDisplay from "../ProjectDisplay";


const images = [
    {
        original: "https://cdn.discordapp.com/attachments/883004118749282336/1159305345169104926/image.png?ex=65308a3d&is=651e153d&hm=04f0b7ed8149f2adc0bfeb49f5fcd38f58cb3b013d2c5c9def1692a91ae2a193&",
        thumbnail: "https://cdn.discordapp.com/attachments/883004118749282336/1159305345169104926/image.png?ex=65308a3d&is=651e153d&hm=04f0b7ed8149f2adc0bfeb49f5fcd38f58cb3b013d2c5c9def1692a91ae2a193&",
    },
    {
        original: "https://cdn.discordapp.com/attachments/1120019096935874620/1153031777439469598/image.png?ex=652c2c86&is=6519b786&hm=f09087773082c88fdfafaf513b47a2e953e5e5fce2938c129907dfefb01b21b7&",
        thumbnail: "https://cdn.discordapp.com/attachments/1120019096935874620/1153031777439469598/image.png?ex=652c2c86&is=6519b786&hm=f09087773082c88fdfafaf513b47a2e953e5e5fce2938c129907dfefb01b21b7&",
    },
];

export default function MedievalGame() {


    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div >
                        <h1 style={{margin: 0}}>1347 Game</h1>
                        <h4>May 2023</h4>

                        <p>A combat adventure game for the Montreal Game Jam 2023, where the theme was "historical event". You play as a hire by the University of  Paris medical faculty, where you work, to help contain the spread of the Black Death plague in a nearby town. Fight the poison air beasts that have been spreading the plague and save the town!
                            <br/><br/>All code, art and music was made by me within the period of the jam.
                        </p>


                        <div style={{display: "flex"}}>
                            <div>


                            </div>
                            <div>
                                <h3>Links</h3>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div >
                                        <a href={"https://github.com/shinykiwi/plague-mtlgj"}><li>
                                        <GitHubIcon/></li></a>

                                    </div>
                                    <div>
                                        <iframe frameBorder="0"
                                                src="https://itch.io/embed/2044333?border_width=0&amp;bg_color=fcf1ce&amp;fg_color=222222&amp;link_color=a42020&amp;border_color=584334"
                                                width="206" height="165"><a
                                            href="https://shinykiwi.itch.io/average-day-in-1347">Just a Day in 1347 by
                                            shinykiwi</a></iframe>
                                    </div>



                                </div>


                            </div>
                            <div className={"tools"}>
                                <h3>Tools</h3>
                                <div >
                                    <ul>
                                        <li>
                                            Godot Engine (coded in GDScript)
                                        </li>
                                        <li>Procreate</li>
                                        <li>Garageband</li>
                                        <li>Photoshop</li>

                                    </ul>



                                </div>


                            </div>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <iframe width="840" height="474"
                                    src="https://www.youtube.com/embed/Mxfo7xIIQg4">
                            </iframe>
                        </div>

                        <p style={{marginTop: "3rem"}}>Used the Billboard setting on the sprite to make them face the camera everywhere. This is actually a 3D project so I could make use of the player walking backwards and forwards in space. This was to emulate a Castle Crashers type of movement.
                        <br/>See below.
                        </p>

                        <div style={{textAlign: "center"}} className={"cover-img"}>
                            <img src={require(`./games/game-view-setup.png`)} />
                            <img src={require(`./games/game-view-result.png`)}/>
                        </div>

                        <p style={{marginTop: "3rem"}}>To code the AI, I made use of a state system, with three states: IDLE, WANDER and CHASE. Idle is so that the enemy isn’t constantly searching for the player and can stand still sometimes. Wander is when the enemy walks around and seeks the player. Chase is when the enemy’s player detection field interacts with the player and then the enemy begins to actively move towards the player’s position.

                            <br/>See below.
                        </p>

                        <div style={{textAlign: "center"}} className={"code-img"}>
                            <img src={require(`./games/ai-state-machine.png`)} />

                        </div>

                        <p style={{marginTop: "3rem"}}>Here you can visualize the structure of the enemy sprite.


                        </p>

                        <div style={{textAlign: "center"}} className={"cover-img"}>
                            <img src={require(`./games/enemy circle.png`)} />
                            <img src={require(`./games/enemy components.png`)} />

                        </div>


                        <p style={{marginTop: "3rem"}}>
                           Another little addition I made to the world to make it feel more alive and also to tie in the theme of the plague was adding rats scurrying across the screen. This was fairly simple to implement, it's just instantiating a bunch of rats and having them all scurry to various positions within a range at the other end of the screen. Then once they reach their destination off screen, to delete the instances.
                        </p>

                        <div style={{textAlign: "center"}} >
                            <img src={require(`./games/rats.png`)} />


                        </div>


                    </div>
                }/>




                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}