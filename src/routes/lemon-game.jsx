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

import Screenshot1 from "./games/lemon-game/lemon-game-01.png";
import Screenshot2 from "./games/lemon-game/lemon-game-02.png";
import Screenshot3 from "./games/lemon-game/lemon-game-03.png";
import Screenshot4 from "./games/lemon-game/lemon-game-04.png";
import Screenshot5 from "./games/lemon-game/lemon-game-05.png";

const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;


const images = [
    {
        original: Screenshot1,
        thumbnail: Screenshot1,
    },
    {
        original: Screenshot2,
        thumbnail: Screenshot2,
    },
    {
        original: Screenshot3,
        thumbnail: Screenshot3,
    },
    {
        original: Screenshot4,
        thumbnail: Screenshot4,
    },
    {
        original: Screenshot5,
        thumbnail: Screenshot5,
    },

];

export default function TheLemonGame() {

    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div>
                        <h1 style={{margin: 0}}>The Lemon Game (WIP)</h1>
                        <h4>January 2025</h4>

                        <p> When life gives you lemons...then what?</p>
                        <br/>
                        <p>This game was started during a class teaching "Situational Game Design", in the 4 weeks
                            given. However, we want to continue this game as there is so much more we could add, so
                            consider this a demo of what could be! I worked as a programmer along with my amazing artist
                            Tuana. All assets and code were made by us with the exception of most of the sound effects.
                            This game is actively being updated on our itch.io.</p>

                        <div style={{display: "flex"}}>
                            <div>
                                <h3>Team</h3>
                                <ul>
                                    <a href={"https://tuanabicakci.dev/"}>
                                        <li>Tuana Bıçakcı (3D Artist, Environment Designer)</li>
                                    </a>
                                </ul>

                                <h3 style={{fontSize: "26px", marginLeft: "2rem", color: "darkred"}}>+ me!
                                    (programmer)</h3>

                            </div>
                            <div>
                                <h3>Links</h3>
                                <ul>
                                    <a href={"https://github.com/shinykiwi/lemon-game"}>
                                        <li>
                                            <GitHubIcon/>

                                        </li>
                                    </a>

                                </ul>

                            </div>
                            <div className={"tools"}>
                                <h3>Tools</h3>
                                <div>
                                    <div>
                                        <ul>
                                            <li>Unity / C#</li>
                                            <li>Blender</li>
                                            <li>Substance Painter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div style={{textAlign: "center"}}>
                            <iframe width="840" height="475"
                                    src="https://www.youtube.com/embed/B4lJhGOMk4E">
                            </iframe>
                        </div>*/}

                        <div>
                            <ImageGallery items={images} showPlayButton={false} showNav={false} slideDuration={200}
                                          showFullscreenButton={false}/>

                        </div>

                        <h3 style={{marginTop: "3rem"}}>My goals for the game</h3>

                        <p>We started off this game wanting to make a game about experimentation, curiosity, and whimsy.
                            The “when life gives you lemons, make lemonade” is such a cliche and I wanted to kind of
                            make fun of that a bit by letting the player do really anything. The goal was to make the
                            obvious path really obvious: to make lemonade, everyone knows that. But after the player is
                            done making lemonade a bunch of times, I wanted them to be like “well what else?” That was
                            my goal of this project, and I also wanted to put everything I’ve learned about game design
                            and user experience to the test by trying to make interactions obvious enough to be used by
                            the player with ease, but make things confusing enough to where the player is having fun. A
                            little confusion can lead to curiosity and great satisfaction once you finally figure it
                            out. <br/><br/>This was a great challenge as it turns out, and was probably the part that
                            occupied my
                            brain the most while coding this game. These were questions I was trying to keep in mind:
                            <ol style={{all: "revert"}}>
                                <li style={{all: "revert"}}>How can I make the player understand immediately what to
                                    do?
                                </li>
                                <li style={{all: "revert"}}>How can I hook the player to want to try out other things?
                                </li>
                                <li style={{all: "revert"}}>What elements of the game are inherently playful?</li>
                            </ol>

                        </p>

                        <h3 style={{marginTop: "3rem"}}>Challenges from the demo</h3>
                        <p>
                            Throughout the project, the coding was never the difficult part, it was trying to make the
                            interactions feel intuitive. At the playtest, I went in thinking that no one was going to
                            understand how to play our game at all. Though I playtested plenty on my own, I wasn’t
                            confident that someone else other than me was going to be able to figure it out. <br/><br/>The
                            result was that some cues were more obvious than others; everyone understood that the
                            doorbell
                            meant there was someone or something at the door waiting, and could open the door to see the
                            lemon delivery. To my dismay, every single player also understood (incorrectly) that the
                            knife rack was so that the player could pick up a knife from there and slice the
                            lemon. <br/>
                            <br/>
                            For me, making the game feel intuitive was the most challenging part. What will stick with
                            me is
                            that anytime you put anything in this kind of game, the player will want to play with it no
                            matter what it is. And if your game doesn’t support that, then it feels disappointing to the
                            player. Also, a fairly obvious one, that if you let the player learn that they can use
                            various tools around the kitchen (like a water pitcher, a spoon, a sink, etc) and they find
                            out they can’t use one specific tool for no reason (knife rack), they will assume either
                            they haven’t unlocked it, they did something wrong, or they feel let down or mislead by the
                            game because we built up this expectation and trust that was then destroyed. In future
                            updates, we are working to change this.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>Things that went well</h3>
                        <p>
                            I’ve worked with Tuana on a lot of games and game jams together, so we have become used to
                            our workflows and how long it realistically takes us to implement things in a game. This
                            meant that it was easy to create a real schedule that we could stick to, and we actually
                            did. Everything went according to the schedule we set for ourselves and we were on target
                            for the update and for the playtest.

                        </p>

                        {/*<div className={"cover-img"}>*/}
                        {/*    <div style={{textAlign: "right"}}>*/}
                        {/*        <img src={require(`./games/freddyscafe/overhead.png`)} />*/}
                        {/*        <h5>Overhead view of the kitchen.</h5>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className={"cover-img"}>*/}
                        {/*    <div style={{textAlign: "right"}}>*/}
                        {/*        <img src={require(`./games/freddyscafe/camera-setup.png`)} />*/}
                        {/*        <h5>Camera setup in the editor.</h5>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<h3 style={{marginTop: "3rem"}}>Technical Aspects</h3>*/}
                        {/*<p>This was a very “UI” heavy game, since the player does not have control to move around, and movement is done through clicking buttons. As a result, a lot of our time was spent learning how to create UI in Unreal Engine and how to provoke events upon interaction.*/}
                        {/*</p><br/>*/}

                        {/*<p><strong>Classes</strong></p><br/>*/}
                        {/*<p><em>BP_Recipe</em></p>*/}
                        {/*<p>*/}
                        {/*    <span style={{color: "deeppink"}}>Text</span> Name*/}
                        {/*    <span style={{color: "cornflowerblue"}}>BP_Ingredient[]</span> IngredientList*/}
                        {/*</p>*/}


                        {/*<br/>*/}
                        {/*<p><em>BP_Ingredient</em></p>*/}
                        {/*<p><span style={{color: "deeppink"}}>Text</span> StepName <span style={{color: "dimgray"}}> // for example, 'boil'</span>*/}
                        {/*    <br/><span style={{color: "deeppink"}}>Text</span> Name <span style={{color: "dimgray"}}> // for example, 'coffee beans'</span>*/}
                        {/*    <br/><span style={{color: "crimson"}}>Boolean</span> Completed*/}
                        {/*    <br/><span style={{color: "darkcyan"}}>Integer</span> ViewTargetID <span style={{color: "dimgray"}}> // which camera view to switch to for that ingredient</span>*/}
                        {/*    <br/><span style={{color: "cornflowerblue"}}>Integer</span> IconImage <span style={{color: "dimgray"}}> // the ingredient icon to go in the left panel UI</span></p>*/}

                        {/*<br/>*/}
                        {/*<p><em>GI_Main</em></p>*/}
                        {/*<p>Our custom game instance, which holds a reference to the current active ingredient and an array of CameraActors, referencing all the possible view targets to switch to.</p>*/}

                        {/*<br/>*/}
                        {/*<p><em>BP_TurkishCoffee (extends BP_Recipe) </em></p>*/}
                        {/*<p>No variables, just initializes itself with preset specific Ingredients.</p>*/}
                        {/*<p>Most of the functionality of the game was implemented in the Level Blueprint because we had to make use of many of the actors in the level like the cameras.</p>*/}

                        {/*<div className={"cover-img"}>*/}
                        {/*    <div style={{textAlign: "right"}}>*/}
                        {/*        <img src={require(`./games/freddyscafe/turkish-coffee-initialization.png`)} />*/}
                        {/*        <h5>Initializing BP_TurkishCoffee with preset ingredients.</h5>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={"cover-img"}>*/}
                        {/*    <div style={{textAlign: "right"}}>*/}
                        {/*        <img src={require(`./games/freddyscafe/change-camera-views.png`)} />*/}
                        {/*        <h5>Camera view changing based on ID.</h5>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<p>*/}
                        {/*    This snapshot demonstrates when a new recipe is created, to dynamically populate the left side panel with the required steps based on what ingredients are necessary to create the item.</p>*/}
                        {/*<div className={"blueprint-img"}>*/}
                        {/*    <div style={{textAlign: "right"}}>*/}
                        {/*        <img src={require(`./games/freddyscafe/populating-recipe.png`)} />*/}
                        {/*        <h5>Populate event to fill the steps on left panel.</h5>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<h3 style={{marginTop: "3rem"}}>Successes and Failures</h3>*/}
                        {/*<p>Players smoothly navigated our UI, grasping the game's goals pretty quickly. Most of the positive reception was regarding our camera transitions. For future iterations, animations like filling cups, diversifying recipes, and introducing a subtle timer for added challenges can make the game more engaging and satisfying while diversifying the game loop.</p>*/}

                        <h3 style={{marginTop: "3rem"}}>Want to play?</h3>
                        <p>It's available on itch.io for Windows and Mac. Here's the secret link for now. The password is <b>lemon</b>. </p>
                        <a href={"https://shinykiwi.itch.io/the-lemon-game"}>
                            https://shinykiwi.itch.io/the-lemon-game
                        </a>

                        {/*<div style={{}}>*/}
                        {/*    /!*<iframe frameBorder="0"*!/*/}
                        {/*    /!*        src="https://itch.io/embed/3334751?linkback=true&amp;bg_color=fdf5ec&amp;fg_color=3e0808&amp;link_color=fa5c5c&amp;border_color=d0bc65"*!/*/}
                        {/*    /!*        width="552" height="167"><a href="https://shinykiwi.itch.io/the-lemon-game">The*!/*/}
                        {/*    /!*    Lemon Game by Kira Fountain, Tuana Bıçakcı</a></iframe>*!/*/}

                        {/*</div>*/}

                        {/*<h3 style={{marginTop: "3rem"}}>Takeaways</h3>*/}
                        {/*<p>This project pushed us into uncharted territory with its heavy reliance on UI, a departure from our usual games. The challenge was a great learning experience, and now, in future projects, we feel more comfortable with widgets and UI in Unreal Engine and are eager to experiment some more.</p>*/}


                        <h3 style={{marginTop: "2rem"}} className={"end-article"}>thanks for reading!</h3>
                        <h3 className={"end-article"}>- Kira</h3>


                        {/*<div className={"cover-img"}>*/}
                        {/*    <div style={{textAlign: "right"}}>*/}
                        {/*        <img src={require(`./games/freddyscafe/us-together.jpg`)} />*/}
                        {/*        <h5>Us at the GAMERella closing ceremony!</h5>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                }/>

                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}