import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import ArticleIcon from "@mui/icons-material/Article";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: "4rem" }}>
            <AppBar position="static" sx={{boxShadow: "none", color: "black", backgroundColor: "rgba(0,0,0,0)" }}>
                <Toolbar>
                    {/*<IconButton*/}
                    {/*    size="large"*/}
                    {/*    edge="start"*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="menu"*/}
                    {/*    sx={{mr: 2}}*/}
                    {/*>*/}
                    {/*    <MenuIcon/>*/}
                    {/*</IconButton>*/}

                    <h1 style={{fontFamily: "Spectral, serif", lineHeight: "1", width: "80%",}}>Kira Fountain</h1>

                    <div style={{
                        display: "flex",
                        textAlign: "right",
                        justifyContent: "space-between",
                        marginLeft: "2rem"
                    }}>
                        <div id="link">
                            <a href={`/code`}>
                                Code
                            </a>

                        </div>
                        <div id="link">
                            <a href={`/art`}>
                                Art</a>

                        </div>
                        <div id="link">
                            <a href={`/other`}>
                                Other</a>
                        </div>
                    </div>



                </Toolbar>
            </AppBar>
        </Box>
    )
        ;
}
