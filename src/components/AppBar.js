import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1, marginTop: "4rem"}}>
            <AppBar position="static" sx={{boxShadow: "none", color: "black", backgroundColor: "rgba(0,0,0,0)"}}>
                <Toolbar>
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
                                Notes</a>
                        </div>
                        <div id="link">
                            <a href={`/me`}>
                                me</a>
                        </div>
                    </div>


                </Toolbar>
            </AppBar>

            <div style={{
                borderBottom: "solid black 1px",
                marginTop: "1rem",
                marginBottom: "1rem",
                opacity: "50%"
            }}></div>
        </Box>
    )
        ;
}
