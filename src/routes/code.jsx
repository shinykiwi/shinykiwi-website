import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BasicModal from "../BasicModal";
import Card from "@mui/material/Card";

import ProjectDisplay from "../ProjectDisplay";
import PythonLogo from "./games/icons/python.svg";
import CPPLogo from "./games/icons/cpp.svg";
import UnrealEngineLogo from "./games/icons/unreal.svg";
import JavaLogo from "./games/icons/java.svg";
import GodotLogo from "./games/icons/godot.svg";
import JSLogo from "./games/icons/js.svg";
import HTMLLogo from "./games/icons/html5.svg";
import CSSLogo from "./games/icons/css.svg";
import TailwindLogo from "./games/icons/tailwind.svg";
import ReactLogo from "./games/icons/react.svg";
import Resume from "./pdfs/KiraFountain-Resume.pdf";
import EmailIcon from '@mui/icons-material/Email';
import FeaturedProject from "../FeaturedProject";



const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;




export default function Code() {


    return (
        <div id="art">

            <Container maxWidth={'lg'}>
                <div>
                    <h1>Hi, I'm Kira</h1>
                    <div style={{display: "flex", marginTop: "1rem"}}>

                        <a href={"mailto:kafountain5@gmail.com"}><h3
                            style={{fontFamily: "Patrick Hand, cursive", fontSize: "18px", marginRight: "1rem"}}><EmailIcon/></h3></a>
                        <a href={Resume} target={"_blank"}><h3 style={{fontFamily: "Patrick Hand, cursive", fontSize: "18px"}}>Resume</h3>
                        </a>
                    </div>
                    <p style={{marginBottom: "2rem"}}>I'm a game development student based in Montreal, QC. I'm in my third year, studying Computer
                        Science and Computation Arts
                        at <a
                            href={"https://www.concordia.ca/academics/undergraduate/computer-science-comp-arts.html"}>Concordia
                            University</a>.
                        My main focus thus far has been on game programming, however I have a variety of experience
                        with
                        software development, databases, web development and various APIs.
                        Here you can find all my projects related to the world of programming. </p>

                    <div>
                        <div className={"code-responsive"}>
                            <div style={{borderRight: "2px solid grey", paddingRight: "1rem", marginRight: "3rem"}}>
                                <h3 style={{
                                    fontFamily: "Love Ya Like A Sister",
                                    fontSize: "30px",
                                }}>Projects</h3>
                                <ProjectDisplay/>

                            </div>
                            <div>

                                <FeaturedProject/>

                            </div>

                        </div>

                    </div>
                </div>
            </Container>


            <div style={{height: '10rem'}}/>


        </div>
    );

}