import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import GitHubIcon from '@mui/icons-material/GitHub';

import ProjectDisplay from "../ProjectDisplay";



const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;



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

export default function MiracleDaycare() {


    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div >
                        <h1 style={{margin: 0}}>Miracle Daycare</h1>
                        <h4>July 2023 - Present</h4>

                        <p>A first person horror where you play as a thrift store employee, sorting through the donations of a closed down daycare.
                        The design of this game focuses on narrative and environmental storytelling, and was a way for my dev partner and I to learn Unreal Engine 5.
                        The game was programmed using blueprints. The game is still in development!</p>


                        <div style={{display: "flex"}}>
                            <div>
                                <h3>Partner</h3>
                                <ul>
                                    <a href={"https://www.linkedin.com/in/tuana-bicakci/"}><li>
                                        Tuana Bıçakcı (Designer/Programmer)

                                    </li></a>

                                </ul>

                            </div>
                            <div>
                                <h3>Links</h3>
                                <ul>
                                    <a href={"https://github.com/shinykiwi/miracle-daycare"}><li>
                                        <GitHubIcon/>

                                    </li></a>

                                </ul>

                            </div>
                        </div>


                        <div>
                            <ImageGallery items={images} showPlayButton={false} showNav={false} slideDuration={200} showFullscreenButton={false}/>

                        </div>

                        <div>
                            <h3>Tools</h3>
                            <p>Unreal Engine 5, current assets from Quixel Bridge. </p>
                        </div>




                    </div>
                }/>




                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}