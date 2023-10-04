import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BasicModal from "../BasicModal";
const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;




export default function Code() {

    const gameJams = [
        {
            id: '1',
            title: 'Just a Day in 1347',
            year: '2023',
            description: 'My solo submission for the Montreal Game Jam 2023. Made in Godot.',
            image: '1347gameplay.png',
            link: 'https://shinykiwi.itch.io/average-day-in-1347',
        },
        {
            id: '2',
            title: 'Felt Alone So I Went for a Walk',
            year: '2022',
            description: 'Our submission for the 2022 CGD Jam. Made in Unity.',
            image: 'feltalonegameplay.png',
            link: 'https://shinykiwi.itch.io/felt-alone-so-i-went-for-a-walk'
        },
        {
            id: '3',
            title: 'Duality of Souls',
            year: '2022',
            description: 'The 1st place game at the Montreal Global Game Jam 2022 site. Made in Godot.',
            image: 'dualitysoulsgameplay.png',
            link: 'https://shinykiwi.itch.io/duality-of-souls'
        },
        {
            id: '4',
            title: 'Energy Bop',
            year: '2021',
            description: 'My first solo submission, where I created a rhythm game for the Go Godot2 Jam. Made in Godot.',
            image: 'energybopgameplay.png',
            link: 'https://shinykiwi.itch.io/energy-b0p'
        },

    ];



    return (
        <div id="art">
            <Container maxWidth='lg'>
                <h1>Code</h1>

                <h2>Game Jams</h2>

                <Grid container spacing={containerSpacing}>
                    {gameJams.map((a) => (
                        <Grid wrap="nowrap" item zeroMinWidth xs={xs} md={md} lg={lg} key={a.id} >
                            <div className="gallery">
                                <div className={'container'}>
                                    <img src={require(`./art/${a.image}`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                    <div className="overlay">
                                        <div className="text"><strong><em>{a.title}</em></strong><br/>{a.year}</div>
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