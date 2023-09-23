import {Outlet} from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';
import ArticleIcon from '@mui/icons-material/Article';
import PersistentDrawerLeft from "../PersistentDrawer";
import * as React from "react";

export default function Root() {
    return (
        <>
            <PersistentDrawerLeft>

            </PersistentDrawerLeft>

            <div id="detail">
                <div style={{marginTop: "5rem"}}></div>
                <Outlet/>

            </div>
        </>
    );
}

