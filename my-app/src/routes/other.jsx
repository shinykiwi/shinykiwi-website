import BasicModal from "../BasicModal";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import DownloadIcon from '@mui/icons-material/Download';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Other() {

    return(

        <>


            <Container maxWidth={'xl'}>
                <h1><em>✨ Other stuff ✨</em></h1>


                <div>
                    <Accordion defaultExpanded={true}>
                        <AccordionSummary sx={{backgroundColor: "#F7F7F7 "}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h2 style={{margin:"1rem", backgroundColor:"#FFEFBC"}}>Resources</h2>
                            <Divider/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{margin: "1rem"}}>
                                <div className={"article"}>
                                    <h3>Intro to Pixel Art</h3>
                                    <div >
                                        <a href={"./pdfs/intro-to-pixel-art.pdf"}>


                                            <div className={'container'}>
                                                <img src={require(`./art/introtopixelart.png`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                                <div className="overlay">
                                                    <div className="text">

                                                        <DownloadIcon/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <p style={{fontSize: "12px"}}>Fountain, Kira. "Intro to Pixel Art." Concordia Game Development. 28 Jan. 2023, Concordia University, Montreal, Quebec.</p>
                                        <p>This was a workshop I hosted at Concordia, teaching the fundamentals of pixel art based on my years of experience. Feel free to download the PDF version.</p>
                                    </div>
                                </div>

                                <div className={"article"}>
                                    <h3>Pixel Art for Games</h3>
                                    <div >

                                        <a href={"./pdfs/pixelart-for-games.pdf"}>
                                            <div className={'container'}>
                                                <img src={require(`./art/pixelartforgames.png`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                                <div className="overlay">

                                                    <div className="text">
                                                        <DownloadIcon/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <p style={{fontSize: "12px"}}>Fountain, Kira. "Pixel Art for Games." Concordia Game Development. 18 Mar. 2023, Concordia University, Montreal, Quebec.</p>
                                        <p>This was the second part to the other pixel art workshop, focusing more on the process and techniques used in pixel art for games specifically.</p>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded={true}>
                        <AccordionSummary sx={{backgroundColor: "#F7F7F7 "}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h2 style={{margin:"1rem", backgroundColor:"#FFD8ED"}}>Unpublished Publications</h2>
                            <Divider/>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div style={{margin: "1rem"}}>
                                <div className={"article"}>
                                    <h3>The Stickiness of Skyrim: A Medieval Fantasy for the Ages</h3>
                                    <div >

                                        <a href={"./pdfs/skyrim-essay.pdf"}>
                                            <div className={'container'}>
                                                <img src={require(`./art/skyrim-header.png`)} alt="Cinque Terre" width="600" height="400" className='image'/>
                                                <div className="overlay">

                                                    <div className="text">
                                                        <DownloadIcon/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <p style={{fontSize: "12px"}}>Fountain, Kira. "The Stickiness of Skyrim: A Medieval Fantasy for the Ages." CART 210. 3 Apr. 2023, Concordia University, Montreal, Quebec.</p>
                                        <p><strong>Abstract:</strong> <em>The Elder Scrolls V: Skyrim</em> is a 2011 open-world RPG developed by Bethesda Game Studios. It takes place in the province of Skyrim, a cold and mountainous region of the fictional continent of Tamriel. Players take on the role of the "Dragonborn," with the ability to absorb the souls of slain dragons and take on their powers. The game features a vast and detailed world for players to explore with an extensive customizable character system. This allows players to create and play as a wide range of characters, with various races, appearances, voices and skills. The game has been highly praised by critics and recognized for its gameplay successes. I will discuss the theory of neo-medievalism, and how aspects of identity, control, and nostalgia contribute to the lasting success and popularity of Skyrim.
                                        </p>
                                        <p>
                                            <a href={"./pdfs/skyrim-essay.pdf"}>Read the full essay. </a>

                                        </p>
                                        <p>
                                            <a href={"./pdfs/skyrim-presentation.pdf"}>See the powerpoint version.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </AccordionDetails>
                    </Accordion>

                </div>





            </Container>




        </>

        );

}