import BasicModal from "../BasicModal";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import DownloadIcon from '@mui/icons-material/Download';
import {Accordion, AccordionDetails, AccordionSummary, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SkyrimEssay from './pdfs/skyrim-essay.pdf';
import SkyrimPPT from './pdfs/skyrim-presentation.pdf';
import IntroToPixelArt from './pdfs/intro-to-pixel-art.pdf';
import PixelArtForGames from './pdfs/pixelart-for-games.pdf';
import EmailIcon from "@mui/icons-material/Email";
import Resume from "./pdfs/KiraFountain-Resume.pdf";
import PythonLogo from "./games/icons/python.svg";
import CPPLogo from "./games/icons/cpp.svg";
import JavaLogo from "./games/icons/java.svg";
import UnrealEngineLogo from "./games/icons/unreal.svg";
import GodotLogo from "./games/icons/godot.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Me() {

    return(

        <>
            <Container maxWidth={'lg'} id={"art"}>
                <div style={{display:"flex"}}>
                    <div style={{width: "50%"}}>
                        <h1>Hi, I'm Kira</h1>
                        <div style={{display: "flex", marginTop: "1rem"}}>



                        </div>
                        <Stack
                            direction="row"
                            spacing={.01}
                        >
                            <a href={"mailto:kafountain5@gmail.com"}><h3
                                style={{fontFamily: "Love Ya Like A Sister", fontSize: "30px", marginRight: "1rem"}}>
                                <EmailIcon/></h3></a>

                            <a style={{fontFamily: "Love Ya Like A Sister", fontSize: "30px", marginRight: "1rem"}}
                               href={"https://www.instagram.com/pxlkiwi/"}>
                                <InstagramIcon/>
                            </a>
                            <a style={{fontFamily: "Love Ya Like A Sister", fontSize: "30px", marginRight: "1rem"}}
                               href={"https://www.linkedin.com/in/kira-fountain/"}>
                                <LinkedInIcon/>
                            </a>
                            <a style={{fontFamily: "Love Ya Like A Sister", fontSize: "30px", marginRight: "1rem"}}
                               href={"https://github.com/shinykiwi"}>
                                <GitHubIcon/>
                            </a>
                            <a href={Resume} target={"_blank"}><h3
                                style={{fontFamily: "Patrick Hand, cursive", fontSize: "24px"}}>Resume</h3>
                            </a>

                        </Stack>

                        <p style={{marginBottom: "2rem"}}>I'm a game development student based in Montreal, QC. I'm in
                            my
                            third
                            year, studying Computer
                            Science and Computation Arts
                            at <a
                                href={"https://www.concordia.ca/academics/undergraduate/computer-science-comp-arts.html"}>Concordia
                                University</a>.
                            My main focus thus far has been on game programming, however I have a variety of experience
                            with
                            software development, databases, web development and various APIs.
                        </p>
                        <div>
                            <h3></h3>
                            <p style={{marginBottom: "1rem"}}></p>

                        </div>
                    </div>
                    <div style={{width: "50%", marginLeft: "4rem",}}>
                        <div>
                            <h3>Programming</h3>
                            <p style={{marginBottom: "1rem"}}>C/C++, C#, Python, Java, Javascript, HTML, CSS, React</p>
                            <h3>Software</h3>
                            <p style={{marginBottom: "1rem"}}>Github, Unreal Engine, Unity 3D, Blender, Microsoft
                                Office, SharePoint, Wordpress, Jetbrains
                                IDEs,
                                Jira, Confluence, Photoshop, Illustrator, Premiere, After Effects, Substance Painter,
                                Aseprite,
                                Godot Engine</p>
                            <h3>Languages</h3>
                            <p style={{marginBottom: "1rem"}}>English, French</p>
                            <h3>When I'm not coding..</h3>

                            <a href={"https://www.instagram.com/pxlkiwi/"} target={"_blank"}>
                                <p style={{marginBottom: "1rem"}}>Fanart</p>
                            </a>


                        </div>
                        {/*<img src={require(`./other/picture.jpg`)} style={{width: "60%", borderRadius: "8px"}}/>*/}
                    </div>
                </div>


            </Container>
        </>

    );

}