import {Outlet} from "react-router-dom";
import AppBar from "../AppBar";
import * as React from "react";
import Container from "@mui/material/Container";

export default function Root() {
    return (
        <>
            <Container maxWidth="lg">
                <AppBar/>
                <div style={{marginTop: "5rem"}}></div>
                <Outlet/>
            </Container>

        </>
    );
}

