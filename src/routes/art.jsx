import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {Box, ImageList, ImageListItem} from "@mui/material";
import BasicModal from "../BasicModal";

const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;


export default function Art() {

    const pixelArt = [
        {
            id: '0',
            title: 'FNAF Glamrock',
            year: '2023',
            image: 'all4-fnaf.png',
            description: 'Portraits of the glamrock animatronics from FNAF5.'
        },
        {
            id: '1',
            title: 'Medieval Pixel Galaxy',
            year: '2022',
            image: 'medievalart.png',
            description: 'Isometric pixel art, inspired by the song Pixel Galaxy by Snail\'s House.'
        },
        
        {
            id: '3',
            title: 'PC-98 Style',
            year: '2021',
            image: 'green-girl.png',
            description: 'Used a gameboy palette, in the style of PC-98.'
        },

        {
            id: '4',
            title: 'Goose, Sans and the Knights',
            year: '2021',
            image: 'indie-pixel.png',
            description: 'Some indie favourites! Commission work.'
        },
        {
            id: '5',
            title: 'CocoJam Key Art',
            year: '2021',
            image: 'cocojam-pixel.png',
            description: 'The key art for a game jam poster. Commission work.'
        },
        {
            id: '6',
            title: 'Raiden Shogun',
            year: '2022',
            image: 'raiden.png',
            description: 'Raiden Shogun from Genshin Impact portrait. Size 64x.'
        },
        {
            id: '7',
            title: 'Waterfall Cloak for Badlion Client',
            year: '2022',
            image: 'cape-waterfall.gif',
            description: 'Minecraft scenery with a waterfall for an in-game cosmetic. Commission work.'
        },
        {
            id: '8',
            title: 'Winter Cloak for Badlion Client',
            year: '2022',
            image: 'cape-winter.gif',
            description: 'A cozy winter cabin scene for an in-game cosmetic. Commission work.'
        },
        {
            id: '9',
            title: 'Flower Cloak for Badlion Client',
            year: '2023',
            image: 'cape-flower.gif',
            description: 'A spring-themed flower in-game cosmetic. Commission work.'
        },
        {
            id: '10',
            title: 'Landscape Cloak for Badlion Client',
            year: '2022',
            image: 'cape-water.gif',
            description: 'Waterfall landscape in-game cosmetic. Commission work.'
        },


    ];
    const threeDArt = [
        {
            id: '1',
            title: 'Sushi Flowers',
            year: '2020',
            image: 'sushi-plant.png',
            description: 'Surrealism piece done in Blender.'
        },
        {
            id: '2',
            title: 'Potion of Fortune',
            year: '2020',
            image: 'potion.png',
            description: 'A mysterious fantasy potion, done in Blender.'
        },
        {
            id: '3',
            title: 'Morning View',
            year: '2020',
            image: 'morning-view.png',
            description: 'Experimenting with cartoony/anime black outlines in Blender.'
        },

    ];
    const illustrations = [
        {
            id: '1',
            title: 'SignaturedX MC',
            year: '2022',
            image: 'sig.png',
            description: 'A friend\'s Minecraft skin illustration.'
        },
        {
            id: '2',
            title: 'Artfight 2022 Character',
            year: '2022',
            image: 'artfight-char.jpeg',
            description: 'A character drawn during the 2022 Artfight. Not my OC.'
        },
        {
            id: '3',
            title: 'Portrait of Jacob',
            year: '2022',
            image: 'jacob-bday.png',
            description: 'A portrait of a friend for his birthday.'
        },
        {
            id: '4',
            title: 'The Librarian',
            year: '2021',
            image: 'character-design.png',
            description: 'Character design practice for a game idea I had.'
        },
        {
            id: '4',
            title: 'Diana',
            year: '2023',
            image: 'diana.PNG',
            description: 'Diana, from Hypixel Skyblock.'
        },

    ];
    const courseWork = [
        {
            id: '1',
            title: '1950\'s Album Cover (Front)',
            course: 'CART 214',
            year: '2021',
            image: 'frontcover.png',
            description: 'A fictional singer\'s album cover from the 50s. Fallout-themed. 1/2',
            link: '/'
        },
        {
            id: '2',
            title: '1950\'s Album Cover (Back)',
            course: 'CART 214',
            year: '2021',
            image: 'backcover.png',
            description: 'A fictional singer\'s album back cover from the 50s. Fallout-themed. 2/2',
            link: '/'
        },
        {
            id: '3',
            title: 'Randolph\'s Radios',
            course: 'CART 211',
            year: '2022',
            image: 'randolph211.png',
            description: 'Randolph, the ethereal radio shop owner.',
            link: '/'
        },
        {
            id: '4',
            title: 'The Daily Express',
            course: 'CART 211',
            year: '2022',
            image: 'dailyexpress.png',
            description: 'Interactive newspaper site showcasing popular 50s era songs and the current events surrounding them.',
            link: 'https://hybrid.concordia.ca/K_FOUNT/'
        },
        {
            id: '5',
            title: 'It\'s All Over But the Crying',
            course: 'CART 212',
            year: '2023',
            image: 'final-212.png',
            description: 'A short piece about escapism for final project.',
            link: 'https://www.youtube.com/watch?v=GtaucbDoVLY'
        },
        {
            id: '6',
            title: 'Wunderkammer',
            course: 'CART 212',
            year: '2023',
            image: 'wunderkammer-preview.png',
            description: 'Dark academia inspired short for midterm.',
            link: 'https://www.youtube.com/watch?v=0yAy4N6wAKQ'
        },
        {
            id: '7',
            title: 'Muzen Radio Render',
            course: 'CART 361',
            year: '2023',
            image: 'muzen-render-2023.png',
            description: 'I did textures, model by our professor Stephane.',
            link: '/'
        },


    ];

    return (
        <div id="art">
            <Container maxWidth={"xl"} >
                <h1>art.</h1>
                <h2>pixel art</h2>

                <Grid container spacing={containerSpacing}>
                    {pixelArt.map((a) => (
                        <Grid wrap="nowrap" item zeroMinWidth xs={xs} md={md} lg={lg} key={a.id} >
                            <div className="gallery">
                                    <div className={'container'}>
                                        <img src={require(`./art/${a.image}`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                        <div className="overlay">
                                            <div className="text"><strong><em>{a.title}</em></strong><br/>{a.year}</div>
                                            <BasicModal title={a.title} year={a.year} image={a.image} description={a.description}/>
                                        </div>
                                    </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>

                <h2>3D art</h2>

                <Grid container spacing={containerSpacing}>
                    {threeDArt.map((a) => (
                        <Grid wrap="nowrap" item zeroMinWidth xs={xs} md={md} lg={lg} key={a.id} >
                            <div className="gallery">
                                <div className={'container'}>
                                    <img src={require(`./art/${a.image}`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                    <div className="overlay">
                                        <div className="text"><strong><em>{a.title}</em></strong><br/>{a.year}</div>
                                        <BasicModal title={a.title} year={a.year} image={a.image} description={a.description}/>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>

                <h2>illustrations</h2>

                <Grid container spacing={containerSpacing}>
                    {illustrations.map((a) => (
                        <Grid wrap="nowrap" item zeroMinWidth xs={xs} md={md} lg={lg} key={a.id} >
                            <div className="gallery">
                                <div className={'container'}>
                                    <img src={require(`./art/${a.image}`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                    <div className="overlay">
                                        <div className="text"><strong><em>{a.title}</em></strong><br/>{a.year}</div>
                                        <BasicModal title={a.title} year={a.year} image={a.image} description={a.description}/>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>

                <h2>course work</h2>

                <Grid container spacing={containerSpacing}>
                    {courseWork.map((a) => (
                        <Grid wrap="nowrap" item zeroMinWidth xs={xs} md={md} lg={lg} key={a.id} >
                            <div className="gallery">
                                <div className={'container'}>
                                    <img src={require(`./art/${a.image}`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                    <div className="overlay">
                                        <div className="text"><strong><em>{a.title}</em></strong><br/>{a.course}<br/>{a.year}</div>
                                        <BasicModal title={a.title} year={a.year} image={a.image} description={a.description} link={a.link}/>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>


                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}