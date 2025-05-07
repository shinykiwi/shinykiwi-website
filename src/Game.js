import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import ReactMarkdown from "react-markdown";
import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {useEffect, useState} from "react";

function displayVideo(video){
    if (video != null){
        return (
            <div style={{textAlign: "center"}}>
                <iframe width="840" height="475"
                        src={video}>
                </iframe>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

export default function Game({
                                 date,
                                 title,
                                 description,
                                 note,
                                 members,
                                 github,
                                 tools,
                                 video,
                                 images,
                                 platforms,
                                 itchio,
                                 markdown = '/games/error.md'
                             }) {

    // Used to fetch the markdown for the game's post
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(markdown)
            .then((res) => res.text())
            .then((text) => setContent(text))
            .catch(() => setContent("Failed to load content."));
    }, [markdown]);


    return (
        <div id="art">
            <Container maxWidth='lg'>
                <div className={"projects"}>
                    <div className={"content-panel"}>
                        <div>
                            <h1 style={{margin: 0}}>{title}</h1>
                            <h4>{date}</h4>

                            <p><i>{description}</i></p>

                            <br/>

                            <p>{note}</p>

                            <div style={{display: "flex"}}>
                                <div>
                                    <h3>Team</h3>
                                    <ul>
                                        {members.map((member) => (
                                            <a key={member.id} href={member.link}>
                                                <li>{member.name} ({member.title})</li>
                                            </a>
                                        ))}
                                    </ul>

                                    <h3 style={{fontSize: "26px", marginLeft: "2rem", color: "darkred"}}>+ me!
                                        (programmer)</h3>

                                </div>
                                <div>
                                    <h3>Links</h3>
                                    <ul>
                                        <a target={"_blank"} href={github}>
                                            <li><GitHubIcon/></li>
                                        </a>

                                    </ul>

                                </div>
                                <div className={"tools"}>
                                    <h3>Tools</h3>
                                    <div>
                                        <div>
                                            <ul>
                                                {tools.map((tool) => (
                                                    <li key={tool}>{tool}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {displayVideo(video)}

                            <div>
                                <ImageGallery items={images} showPlayButton={false} showNav={false} slideDuration={200}
                                              showFullscreenButton={false}/>

                            </div>

                            <div>
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>

                            <h3 style={{marginTop: "3rem"}}>Want to play?</h3>
                            <p>It's available on itch.io for {platforms}.</p>

                            <div>
                                {itchio}
                            </div>

                            <h3 style={{marginTop: "2rem"}} className={"end-article"}>thanks for reading!</h3>
                            <h3 className={"end-article"}>- Kira</h3>

                        </div>
                    </div>
                </div>

                <div style={{height: '10rem'}}>

                </div>
            </Container>
        </div>
    );
}