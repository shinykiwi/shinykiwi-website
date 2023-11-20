import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import playingGame from "./games/prismagame/playing-our-game.png";
import trophies from "./games/prismagame/trophies.png";


import ProjectDisplay from "../ProjectDisplay";




const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;



const images = [
    {
        original: "https://cdn.discordapp.com/attachments/1170173602058993834/1170876443463520287/blue-bg.png?ex=655aa2a9&is=65482da9&hm=87db3e34b359748101146e460bfc3f7978bedf036a956060fc3f437dbc6b061d&",
        thumbnail: "https://cdn.discordapp.com/attachments/1170173602058993834/1170876443463520287/blue-bg.png?ex=655aa2a9&is=65482da9&hm=87db3e34b359748101146e460bfc3f7978bedf036a956060fc3f437dbc6b061d&",
    },
    {
        original: "https://cdn.discordapp.com/attachments/1170173602058993834/1170876444348522556/red-bg.png?ex=655aa2aa&is=65482daa&hm=113d7ee65b77a46b8594a96bcbd32372b7680089b1b4c9ba51ecdee3a308b0c5&",
        thumbnail: "https://cdn.discordapp.com/attachments/1170173602058993834/1170876444348522556/red-bg.png?ex=655aa2aa&is=65482daa&hm=113d7ee65b77a46b8594a96bcbd32372b7680089b1b4c9ba51ecdee3a308b0c5&",
    },
    {
        original: playingGame,
        thumbnail: playingGame,
    },
];

export default function Prisma() {


    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div >
                        <h1 style={{margin: 0}}>PRISMA</h1>
                        <h4>November 2023</h4>

                        <p>A 3D platformer game where manipulating the hues of the environment reveals unseen paths and puzzles. Activate all three prism statues to win.
                            This game was made for the Concordia Game Jam 2023, within the 48 hours given. The theme was "Space in Between". All assets and code were made within the duration of the jam (except for the music). Both myself and Tuana were programmers and designers for this game.</p>


                        <div style={{display: "flex"}}>
                            <div>
                                <h3>Partner</h3>
                                <ul>
                                    <a href={"https://www.linkedin.com/in/tuana-bicakci/"}><li>
                                        Tuana Bıçakcı (Programmer/Artist)

                                    </li></a>

                                </ul>

                                <h3 style={{fontSize: "26px", marginLeft: "2rem", color: "darkred"}}>+ me! (programmer)</h3>

                            </div>
                            <div>
                                <h3>Links</h3>
                                <ul>
                                    <a href={"https://github.com/shinykiwi/prisma-game"}><li>
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

                                        </ul>
                                    </div>


                                </div>


                            </div>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <iframe width="840" height="475"
                                    src="https://www.youtube.com/embed/NjrTsQlXuV4">
                            </iframe>
                        </div>


                        <div>
                            <ImageGallery items={images} showPlayButton={false} showNav={false} slideDuration={200} showFullscreenButton={false}/>

                        </div>

                        <h3 style={{marginTop: "3rem"}}>Development Process</h3>
                        <p >We started off by listing what kind of game we wanted to try making next, and since we were already working on another project in
                            <a style={{color: "#247f9b"}} href={"/code/miracle-daycare"} target={"_blank"}> first person</a>, we wanted to try out third person. We decided on some criteria:</p>

                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <ul className={"tools"} style={{marginLeft: "2rem", marginBottom: "2rem"}}>
                                <li>3D Third person</li>
                                <li>Platformer</li>
                                <li>One level</li>
                                <li>No story</li>
                            </ul>
                            <div>
                                <div className={"contain-img"}>
                                    <div style={{textAlign: "right"}}>
                                        <img src={require(`./games/prismagame/process-pic.png`)} />
                                        <h5>Our brainstorm scribbles!</h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <p>This helped us stay focused, and we started brainstorming ideas. We quickly chose our main mechanic, being the ability to change the world colours and a handheld flashlight’s colours. We only had 48 hours to make the game so we skipped inventing any kind of story and dived straight into development.

                            <br/><br/>The goal of the game is simple: collect all three trophies in order to beat the level.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>Design Choices</h3>

                        <p>We wanted to keep the graphics and user interface simple and easy to understand. We went as minimalist as possible with the colour change wheel and also the platforms and environment. The focus was meant to be on the puzzles, so we believed by keeping this part simple we could put more time into the mechanics instead of how the game looks.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/prismagame/ui-design-gif.gif`)} />
                                <h5>Colour switching UI design process.</h5>
                            </div>
                        </div>

                        <h3 style={{marginTop: "3rem"}}>Player Experience</h3>

                        <p>The intended experience was to ideally create a challenge involving the careful use of your ability in the game. We wanted the player to have to strategize when they would switch colours and to anticipate what might happen next. Since it was a platformer, we also wanted the running and jumping to feel smooth and it to not be a hindrance to figuring out the puzzles. The player should not feel like they were cheated because of the physical mechanics, and should instead feel challenged by the complexity of the puzzles.
                        </p>

                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/prismagame/level-design.jpg`)} />
                                <h5>Level design brainstorm on paper.</h5>
                            </div>
                        </div>


                        <div className={"cover-img"}>
                            <div style={{textAlign: "right"}}>
                                <img src={require(`./games/prismagame/level-layout.png`)} />
                                <h5>Level layout overview in editor.</h5>
                            </div>
                        </div>

                        <p>In the end, because of the time constraints we weren’t able to fully realize the potential of the system. The puzzles probably felt a bit easy for players. We also received criticism on the jump feeling hard to control, which we certainly anticipated would not have been perfectly ironed out after 48 hours.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>Technical Aspects</h3>
                        <p>We used Unreal Engine blueprints to make this game, because they make it quick to get a prototype going.
                        </p>

                        <h3 style={{marginTop: "3rem"}}>Takeaways</h3>
                        <p>Overall it was fun to try something new and out of our comfort zones, since my partner and I tend to make games that are heavy on narrative and physical mechanics are not a priority. If I were to do this game again, I would pay particular attention to the jumping mechanic and making that feel better to play.</p>

                        <h3 className={"end-article"}>thanks for reading!</h3>
                        <h3 className={"end-article"}>- Kira</h3>
                    </div>
                }/>



                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}