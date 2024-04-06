import * as React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Project(props) {
    return (
        <div >
            <div style={{borderBottom: "solid black 1px", marginTop: "5rem",  marginBottom: "3rem", opacity: "50%"}}></div>
            <div className={"project-header"}>
                <div>
                    <h1>{props.title}</h1>
                    <p style={{marginTop: "2rem"}}>{props.tagline}</p>
                </div>
                <div className={"project-desc"}>
                    <p>{props.description}</p>
                    <div style={{marginTop: "1rem"}}>
                        <a className={"project-link"} href={props.link}>
                            See more
                            <ArrowOutwardIcon sx={{marginLeft: ".5rem", paddingTop: ".5rem", color: "black"}}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={"cover-img"} style={{marginTop: "2rem"}}>
                <img  src={require(`./routes/games/${props.image}`)}/>
            </div>
        </div>

    );

}

