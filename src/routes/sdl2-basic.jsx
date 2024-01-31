import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import GitHubIcon from '@mui/icons-material/GitHub';

import ProjectDisplay from "../ProjectDisplay";
import posts from "../posts.json"
import moment from "moment";


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



export default function Sdl2Basic() {


    return (
        <div className={"projects-panel"}>
            <div className={"content-panel"}>
                <div>
                    <h1>{posts[0].title}</h1>
                    <h4>{moment("20240131").format('MMMM Do YYYY')}</h4>

                    <p>{posts[0].summary}</p>


                    <div style={{display: "flex"}}>
                        <div>
                            <h3>Links</h3>
                            <p style={{textAlign: "center"}}>
                                <a href={"https://github.com/shinykiwi/sdl2-basic"}>

                                    <GitHubIcon/> Github
                                </a>
                            </p>

                        </div>
                        <div className={"tools"}>
                            <h3>Tools</h3>
                            <div>
                                <ul>
                                    <li>
                                        C++
                                    </li>
                                    <li>CLion</li>
                                    <li>SDL2 library</li>
                                </ul>


                            </div>

                        </div>
                        <div className={"tools"}>
                            <h3>Resources used</h3>
                            <div>
                                <ul>
                                    <li>
                                        <a href={"https://www.learncpp.com/"}>www.learncpp.com</a>
                                    </li>
                                    <li><a href={"https://lazyfoo.net/tutorials/SDL/index.php"}>lazyfoo.net/tutorials</a></li>
                                    <li><a href={"https://en.cppreference.com/w/"}>cppreference.com</a></li>
                                </ul>


                            </div>

                        </div>
                    </div>

                    <p style={{marginTop: "3rem"}}>
                        Based on online recommendations, I started following the tutorial series by Lazy Foo'
                        Productions found
                        <a href={"https://lazyfoo.net/tutorials/SDL/index.php"} target={"_blank"}> here</a>. So far I've
                        been able to
                        render a window with a blue background using <code>SDL_Window</code> and <code>SDL_Renderer</code>. Next, I'm learning how to handle events in SDL2 which is
                        crucial for a game.
                    </p>

                    <div style={{textAlign: "center"}} className={"cover-img"}>
                        <img src={require(`./games/sdl2/SDL2-progress.png`)}/>

                    </div>

                    <p style={{marginTop: "3rem"}}>That's all I have for now! I'll keep updating this page with more progress.</p>

                </div>

            </div>


            <div style={{height: '10rem'}}></div>


        </div>
    );

}