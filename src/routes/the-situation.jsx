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

import Screenshot1 from "./games/the-situation/situation_01.png";
import Screenshot2 from "./games/the-situation/situation_02.png";
import Screenshot3 from "./games/the-situation/situation_03.png";
import Screenshot4 from "./games/the-situation/situation_04.png";
import Screenshot5 from "./games/the-situation/situation_05.png";
import Screenshot6 from "./games/the-situation/situation_06.png";
import Screenshot7 from "./games/the-situation/situation_07.png";
import Screenshot8 from "./games/the-situation/situation_08.png";
import Screenshot9 from "./games/the-situation/situation_09.png";
import Screenshot10 from "./games/the-situation/situation_10.png";
import Screenshot11 from "./games/the-situation/situation_11.png";
import Screenshot12 from "./games/the-situation/situation_12.png";
import MiroScreenshot from "./games/the-situation/miro-screenshot-situation-game.png";

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
    {
        original: Screenshot6,
        thumbnail: Screenshot6,
    },
    {
        original: Screenshot7,
        thumbnail: Screenshot7,
    },
    {
        original: Screenshot8,
        thumbnail: Screenshot8,
    },
    {
        original: Screenshot9,
        thumbnail: Screenshot9,
    },
    {
        original: Screenshot10,
        thumbnail: Screenshot10,
    },
    {
        original: Screenshot11,
        thumbnail: Screenshot11,
    },
    {
        original: Screenshot12,
        thumbnail: Screenshot12,
    },

];

export default function TheSituation() {

    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div>
                        <h1 style={{margin: 0}}>The Situation</h1>
                        <h4>April 2025</h4>

                        <p><i>You are a student at Konkordia University taking the CARD 415: Game Studio class,
                            and for your game design assignment, you need to create a unique game situation.
                            Look around the classroom to find a good situation.</i></p>

                        <br/>

                        <p>This game was created during the game development course CART 415 at Concordia University.
                            Throughout the course, we referred to a book called Situational Game Design by Brian Upton.
                            This game is based on that book, which outlines the 6 heuristics of situational game design.
                            So shoutout to Brian Upton for his concepts that guided us in the making of this game
                            (both in literal content of the game and in game design).</p>

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
                                    <a target={"_blank"} href={"https://github.com/shinykiwi/situation-game"}>
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

                        <p>For this game, from a programming perspective I wanted to put lots of effort into the actual
                            mechanic of holding cards and manipulating them. I wanted it to feel smooth, intuitive and
                            satisfying with little direction to the player of how to use it. Probably 80% of the code
                            from the game is card mechanic related. I also really wanted to put to the test our playtest
                            feedback from The Lemon Game, which mostly consisted of the player not understanding how to
                            play the game, what the goal is, and how the controls worked.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>Challenges during development</h3>
                        <p>
                            On the technical side, there was a challenge at the start where I had created the card hand
                            in 3D space, which created two major problems: 1) getting the cards to overlay on the screen
                            in instead of clipping with the environment; 2) getting the cards to stay in a fixed
                            position on the screen despite having transformations amongst themselves. Although I’m sure
                            there is a proper solution to these, after giving it a solid day or so of work, I made the
                            executive decision with the interest of time to switch to a 2D UI overlay solution instead.
                        </p>

                        <br/>

                        <p>Thankfully much of the logic for the animations/transformations of the cards remained the
                            same,
                            I just had to remove the Z-axis from the equation among some other minor things. The
                            animations and transformations of the card (like folding and unfolding your hand) when
                            combined with 3D first person movement did still pose some problems and created some
                            interesting bugs revealed during the playtest. Players who tend to speedrun or click
                            rapidly and move around quickly were the best testers because they revealed all kinds
                            of bugs like this. Cards scaling in odd ways, cards rotating correctly but in the wrong
                            position. There just needed to be more support for players to not play the game how I
                            did when developing. </p>

                        <br/>
                        
                        <p>Further, for the first person who played our game in the playtest, some
                            of the
                            situations didn’t work so I had to fix that on the fly before the next person came. Then the
                            next person decided to combine 3 cards together which I hadn’t anticipated and we clearly
                            did not want. That I also fixed on the fly. So that’s why there was no message on the screen
                            to the effect of “You cannot combine a card that has already been combined” because I had
                            only just fixed it.</p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/the-situation/miro-screenshot-situation-game.png`)}/>
                                <h5>A diagram of some class interactions to help me visualize..</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Things that went well</h3>
                        <p>
                            I think we were a bit nervous that players wouldn’t understand how to
                            play our game at all or what the goals were. To our surprise though, players took the time
                            to read the clipboard in the main menu that explained how to play the game. They then seemed
                            to understand their goals immediately and didn’t need much guidance from us. The movement,
                            picking up cards with left click, and toggling the card hand needed no explaining for
                            players.
                        </p>

                        <br/>

                        <p>I think especially toggling the card hand was done well because after a player
                            picks up a card, it brings up the hand and shows the card being added to the hand. Then
                            there’s some helper text that says the player can put away their hand by right clicking.
                            Players will likely move their mouse around which will teach the player that when you hover
                            over a card it will animate upwards, and clicking on a card “selects” it and a “Discard”
                            button appears. If the player selects another card, the “Combine” button will show. So just
                            by picking up a card, they are taught everything they need to know about what they can do
                            with cards. </p>

                        <br/>

                        <p>I think this was very low-friction and was well done in terms of teaching the
                            player by them playing the game. I also think that in general this game was more polished
                            when it comes to glueing the whole game together. What I mean by that is the parts of the
                            game that maybe need to help the player a bit to understand, like when you leave the
                            classroom it asks if you are sure, and if you try to leave with more than 3 cards it will
                            tell the player that they have too many. We saw this in real-time helping players who either
                            didn’t read the clipboard or forgot the rules, to understand “Oh I can only leave with 3
                            cards”. Having a main menu and a pause menu also helped the experience have a bit less
                            friction for the player. Some improvements from last time like having the outline be a
                            standout colour (red) and having the reticule be much more visible helped too. I really
                            think we learned from our amazing playtest feedback from The Lemon Game and prioritized
                            player understanding with proper UI and guidance in this game and I think it paid off.</p>

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
                        <p>It's available on itch.io for Windows and Mac. Here's the secret link for now. The password
                            is <b>lemon</b>. </p>

                        <div style={{}}>
                            <iframe frameBorder="0"
                                    src="https://itch.io/embed/3459849?linkback=true&amp;bg_color=F4F2EC&amp;fg_color=222222&amp;link_color=587eb8&amp;border_color=404a50"
                                    width="552" height="167"><a href="https://shinykiwi.itch.io/the-situation">The
                                Situation
                                by Kira Fountain & Tuana Bicakci</a></iframe>
                        </div>


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