import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BasicModal from "../BasicModal";
import Card from "@mui/material/Card";
import ResponsiveDrawer from "../ResponsiveDrawer";
import ProjectDisplay from "./ProjectDisplay";

const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;




export default function MiracleDaycare() {


    return (
        <div id="art">
            <Container maxWidth='lg'>

                <ProjectDisplay project={
                    <div >
                        <h1 style={{margin: 0}}>Miracle Daycare</h1>
                        <p>A first person horror where you play as a thrift store employee, sorting through the donations of a closed down daycare.
                        The design of this game focuses on narrative and environmental storytelling, and was a way for my dev partner and I to learn Unreal Engine 5.
                        The game was programmed using blueprints.</p>

                        <div>
                            <h3>Partner</h3>
                            <ul>
                                <a href={"https://www.linkedin.com/in/tuana-bicakci/"}><li>
                                    Tuana Bıçakcı (Designer/Programmer)

                                </li></a>

                            </ul>

                        </div>
                    </div>
                }/>


                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}