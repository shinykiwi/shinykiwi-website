import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import {Breadcrumbs, Chip} from "@mui/material";

export default function Code() {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const buttonSX = {
        backgroundColor: '#efac28',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#ab5c1c'
        }
    }

    return (
        <div id="code">
               <Container>
                   <Grid container spacing={4}>
                       {cards.map((card) => (
                           <Grid item key={card} xs={12} sm={6} md={4}>
                               <Link href={'/'} underline={'none'}>
                                   <Card
                                       sx={{color:'#300f0a', backgroundColor: '#e3e3e3' }}
                                   >
                                       <CardMedia
                                           component="div"
                                           sx={{
                                               // 16:9
                                               pt: '56.25%',
                                           }}
                                           image="https://source.unsplash.com/random?wallpapers"
                                       />
                                       <CardContent sx={{ flexGrow: 1,  }}>
                                           <div style={{display: 'flex'}}>
                                               <h2 >
                                                   Project
                                               </h2>
                                               <div className={'tag'}>
                                                   tag
                                               </div>

                                           </div>

                                           <p>
                                               Project description.
                                           </p>
                                       </CardContent>
                                       <CardActions >

                                       </CardActions>
                                   </Card>
                               </Link>

                           </Grid>
                       ))}
                   </Grid>
               </Container>


        </div>
    );

}