import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {ImageList, ImageListItem} from "@mui/material";



export default function Art() {

    const projects = [
        {
            id: '1',
            title: 'Just a Day in 1347',
            description: 'My solo submission for the Montreal Game Jam 2023. You are tasked by the University of Paris medical faculty, where you work, to help contain the spread of the plague in a nearby town. Fight the poison air beasts that have been spreading the plague and save the town!',
            image: '1347game.png'
        },
        {
            id: '2',
            title: 'Synthesia RPG',
            description: 'A Discord-based roleplaying game set in the realm of Synthesia! Hunt, fish, mine and charm your way around the land. Collect resources, upgrade your gear and customize your character in this immersive fantasy RPG!',
            image: 'galaxy_background.jpeg'
        },
        {
            id: '3',
            title: 'Felt Alone So I Went for a Walk',
            description: 'Our submission for the 2022 CGD Jam. It\'s a game about feeling better and reminiscing. Take a walk through the forest, discover your past and keep your flame close! Take the time to explore and ponder what there once was and was not in this narrative (short & unfinished) game. "',
            image: 'feltalone.png'
        },
        {
            id: '4',
            title: 'Duality of Souls',
            description: 'The 1st place game at the Montreal Global Game Jam 2022 site. You play as two souls, torn into different dimensions. Make your way through the castle together, and remember that what you see in one dimension may not exist in the other!',
            image: 'dualityofsouls.png'
        },
        {
            id: '5',
            title: 'Energy Bop',
            description: 'My first solo submission, where I created a rhythm game for the Go Godot2 Jam. You play a busy student whose energy is critically dropping all the time. Grab energy treats and smash enemies to get through the day! This was somewhat unfinished, though all art, code and music was done by me.',
            image: 'energybop.png'
        },
        {
            id: '6',
            title: 'Bit Pass: Password React App',
            description: 'Our submission for Conuhacks 2023, based on the CSSE cybersecurity challenger. The app can analyze passwords people currently use, show them how different augmentations to that password increase crack times and overall security, and generate brand new and complex passwords based on their security selections.',
            image: 'bitpass.jpg'
        },
        {
            id: '7',
            title: 'Daily Express Site',
            description: 'An interactive newspaper from the 1950s with songs from the era. Flip between the songs and watch the newspaper adpat to the current events of the song\'s release date. This was my final project for the course CART212: Creating Computing and Network Culture.',
            image: 'dailyexpress.png'
        },

    ];


    return (
        <div id="art">
            <Container maxWidth='xl'>

            </Container>


        </div>
    );

}