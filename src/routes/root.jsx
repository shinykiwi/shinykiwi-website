import {Outlet} from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';
import ArticleIcon from '@mui/icons-material/Article';
import PersistentDrawerLeft from "../PersistentDrawer";
import AppBar from "../AppBar";
import * as React from "react";
import Container from "@mui/material/Container";

export default function Root() {
    return (
        <>
            <Container maxWidth="xl">
                <AppBar/>
                <div style={{marginTop: "5rem"}}></div>
                <Outlet/>
            </Container>


            {/*<PersistentDrawerLeft main={<div id="detail">*/}



            {/*</PersistentDrawerLeft>*/}


        </>
    );
}

