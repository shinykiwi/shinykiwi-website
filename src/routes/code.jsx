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



const containerSpacing = 2;
const xs = 12;
const md = 6;
const lg = 3;




export default function Code() {


    return (
        <div id="art">
            <Container maxWidth='lg'>


                <h1>Hi, I'm Kira</h1>
                <p>I'm a game development student based in Montreal. I'm in my third year, studying Computer Science at Concordia University.
                    My main focus thus far has been on game programming, however I have a variety of experience with software development, databases, web development and various APIs.
                    Here you can find all my projects related to the world of programming. </p>

                <div style={{display: "flex", justifyContent: "space-between", boxSizing: "border-box"}}>
                    <div >
                        <h2>Languages</h2>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={PythonLogo}  alt={"python logo"}/>
                            <p>Python</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={CPPLogo}  alt={"cpp logo"}/>
                            <p>C++</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={JavaLogo}  alt={"cpp logo"}/>
                            <p>Java</p>
                        </div>

                    </div>
                    <div>
                        <h2>Engines</h2>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={UnrealEngineLogo}  alt={"cpp logo"}/>
                            <p>Unreal Engine 5</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={GodotLogo}  alt={"cpp logo"}/>
                            <p>Godot</p>
                        </div>
                    </div>
                    <div>
                        <h2>Web Dev</h2>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={JSLogo}  alt={"cpp logo"}/>
                            <p>JavaScript</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={HTMLLogo}  alt={"cpp logo"}/>
                            <p>HTML5</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={CSSLogo}  alt={"cpp logo"}/>
                            <p>CSS</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={TailwindLogo}  alt={"cpp logo"}/>
                            <p>Tailwind</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className={"prog-icon"} src={ReactLogo}  alt={"cpp logo"}/>
                            <p>React</p>
                        </div>

                    </div>
                    <div>
                        <h2>Methodologies</h2>
                        <p>Agile</p>
                        <p>Scrum</p>
                    </div>
                    <div>
                        <h2>APIs & Libraries</h2>
                        <p>Discord API</p>
                        <p>interactions.py</p>
                    </div>

                </div>


                <h3 style={{fontFamily: "More Sugar", fontSize: "24px"}}>My projects</h3>
                <ProjectDisplay/>




                <div style={{height: '10rem'}}>

                </div>
            </Container>


        </div>
    );

}