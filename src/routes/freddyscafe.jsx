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

import ConceptArt from "./games/freddyscafe/conceptart.png";
import Pan from "./games/freddyscafe/pan.png";
import Grinder from "./games/freddyscafe/grinder.png";
import Cup from "./games/freddyscafe/cup.png";
import Thumbs from "./games/freddyscafe/thumbs.png";
import PlayingGame from "./games/freddyscafe/playing-our-game.png";



const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;



const images = [
    {
        original: Cup,
        thumbnail: Cup,
    },
    {
        original: Grinder,
        thumbnail: Grinder,
    },
    {
        original: Pan,
        thumbnail: Pan,
    },
    {
        original: ConceptArt,
        thumbnail: ConceptArt,
    },
    {
        original: PlayingGame,
        thumbnail: PlayingGame,
    },
    {
        original: Thumbs,
        thumbnail: Thumbs,
    },


];

export default function Freddyscafe() {


    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div >
                        <h1 style={{margin: 0}}>Freddy's Cafe</h1>
                        <h4>November 2023</h4>

                        <p>A cozy barista simulator where you take orders and make coffee according to a recipe.
                            This game was made for the GAMERella 2023 game jam, within the 36 hours given. The theme for this game jam was “Extraction”, and immediately we thought of making coffee. All assets and code were made within the duration of the jam (except for the counters, stove and music). Both myself and Tuana were programmers and designers for this game.
                        </p>


                        <div style={{display: "flex"}}>
                            <div>
                                <h3>Partner</h3>
                                <ul>
                                    <a href={"https://tuanabicakci.dev/"}><li>
                                        Tuana Bıçakcı (Programmer/Artist)

                                    </li></a>

                                </ul>

                                <h3 style={{fontSize: "26px", marginLeft: "2rem", color: "darkred"}}>+ me! (programmer)</h3>

                            </div>
                            <div>
                                <h3>Links</h3>
                                <ul>
                                    <a href={"https://github.com/shinykiwi/freddys-cafe-game"}><li>
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
                                                Unreal Engine 5 (blueprints)
                                            </li>
                                            <li>Blender</li>
                                            <li>Substance Painter</li>
                                            <li>Illustrator</li>

                                        </ul>
                                    </div>


                                </div>


                            </div>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <iframe width="840" height="475"
                                    src="https://www.youtube.com/embed/B4lJhGOMk4E">
                            </iframe>
                        </div>

                        <div>
                            <ImageGallery items={images} showPlayButton={false} showNav={false} slideDuration={200} showFullscreenButton={false}/>

                        </div>

                        <h3 style={{marginTop: "3rem"}}>Design Choices</h3>

                        <p>We sought to blend the dynamic intensity of <em>Order Up </em>(2008) with the cozy appeal found in today's popular games. To achieve this, we've built a calming ambiance with soft color palettes, a minimalist UI, and a homely kitchen setting bathed in warm light.
                            We prioritized smooth camera transitions and gameplay flow to provide a calm experience for players without frustration.

                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/freddyscafe/overhead.png`)} />
                                <h5>Overhead view of the kitchen.</h5>
                            </div>
                        </div>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/freddyscafe/camera-setup.png`)} />
                                <h5>Camera setup in the editor.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Technical Aspects</h3>
                        <p>This was a very “UI” heavy game, since the player does not have control to move around, and movement is done through clicking buttons. As a result, a lot of our time was spent learning how to create UI in Unreal Engine and how to provoke events upon interaction.
                        </p><br/>

                        <p><strong>Classes</strong></p><br/>
                        <p><em>BP_Recipe</em></p>
                        <p>
                            <span style={{color: "deeppink"}}>Text</span> Name
                            <span style={{color: "cornflowerblue"}}>BP_Ingredient[]</span> IngredientList
                        </p>


                        <br/>
                        <p><em>BP_Ingredient</em></p>
                        <p><span style={{color: "deeppink"}}>Text</span> StepName <span style={{color: "dimgray"}}> // for example, 'boil'</span>
                        <br/><span style={{color: "deeppink"}}>Text</span> Name <span style={{color: "dimgray"}}> // for example, 'coffee beans'</span>
                        <br/><span style={{color: "crimson"}}>Boolean</span> Completed
                        <br/><span style={{color: "darkcyan"}}>Integer</span> ViewTargetID <span style={{color: "dimgray"}}> // which camera view to switch to for that ingredient</span>
                        <br/><span style={{color: "cornflowerblue"}}>Integer</span> IconImage <span style={{color: "dimgray"}}> // the ingredient icon to go in the left panel UI</span></p>

                        <br/>
                        <p><em>GI_Main</em></p>
                        <p>Our custom game instance, which holds a reference to the current active ingredient and an array of CameraActors, referencing all the possible view targets to switch to.</p>

                        <br/>
                        <p><em>BP_TurkishCoffee (extends BP_Recipe) </em></p>
                        <p>No variables, just initializes itself with preset specific Ingredients.</p>
                        <p>Most of the functionality of the game was implemented in the Level Blueprint because we had to make use of many of the actors in the level like the cameras.</p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/freddyscafe/turkish-coffee-initialization.png`)} />
                                <h5>Initializing BP_TurkishCoffee with preset ingredients.</h5>
                            </div>
                        </div>
                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/freddyscafe/change-camera-views.png`)} />
                                <h5>Camera view changing based on ID.</h5>
                            </div>
                        </div>

                        <p>
                            This snapshot demonstrates when a new recipe is created, to dynamically populate the left side panel with the required steps based on what ingredients are necessary to create the item.</p>
                        <div className={"blueprint-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/freddyscafe/populating-recipe.png`)} />
                                <h5>Populate event to fill the steps on left panel.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Successes and Failures</h3>
                        <p>Players smoothly navigated our UI, grasping the game's goals pretty quickly. Most of the positive reception was regarding our camera transitions. For future iterations, animations like filling cups, diversifying recipes, and introducing a subtle timer for added challenges can make the game more engaging and satisfying while diversifying the game loop.</p>

                        <h3 style={{marginTop: "3rem"}}>Want to play?</h3>
                        <p>It's available on itch.io for Windows and Mac.</p>
                        <div style={{}}>
                            <iframe frameBorder="0"
                                    src="https://itch.io/embed/2364546?bg_color=ffffff&amp;fg_color=222222&amp;link_color=e4a672&amp;border_color=68515b"
                                    width="552" height="167"><a href="https://tuanabicakci.itch.io/freddys-cafe">Freddy's
                                Cafe by tuanabicakci</a></iframe>

                        </div>

                        <h3 style={{marginTop: "3rem"}}>Takeaways</h3>
                        <p>This project pushed us into uncharted territory with its heavy reliance on UI, a departure from our usual games. The challenge was a great learning experience, and now, in future projects, we feel more comfortable with widgets and UI in Unreal Engine and are eager to experiment some more.</p>



                        <h3 style={{marginTop: "2rem"}} className={"end-article"}>thanks for reading!</h3>
                        <h3 className={"end-article"}>- Kira & Tuana</h3>


                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/freddyscafe/us-together.jpg`)} />
                                <h5>Us at the GAMERella closing ceremony!</h5>
                            </div>
                        </div>


                    </div>
                }/>

                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}