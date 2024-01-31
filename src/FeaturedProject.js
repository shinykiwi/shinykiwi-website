import * as React from "react";
import Button from "@mui/material/Button";
import {grey} from "@mui/material/colors";
import moment from "moment";
import posts from "./posts.json";

export default function FeaturedProject(props) {

    const postNumber = 0;

    const buttonSX = {
        fontFamily:  "Love Ya Like A Sister, cursive",
        fontWeight: "bold",
        fontSize: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: ".5rem",
        borderRadius: "4px",
    }

    const dateSX = {
        color: "grey",
        fontSize: "18px",
        marginBottom: "1rem"
    }

    return (
        <div>

            <div style={{display: "flex"}}>
                <div style={{}}>
                    <div>
                        <h3 style={{
                            fontFamily: "Love Ya Like A Sister",
                            fontSize: "30px",
                        }}>"{posts[postNumber].title}"</h3>
                        <em><p style={dateSX}>Updated {moment(posts[postNumber].date, "YYYYMMDDHHmm").fromNow()}</p></em>

                    </div>
                    <div style={{display: "flex"}}>
                        <img style={{
                            width: "100%",
                            filter: "drop-shadow(3px 3px 2px black)",
                            objectFit: "cover",
                            marginRight: "2rem"
                        }} src={require(`./routes/games/${posts[postNumber].image}`)}/>
                        <div style={{width: "30%"}}>
                            <a href={posts[postNumber].link} style={buttonSX}>READ</a>
                            <p style={{marginTop: "2rem", textAlign: "justify"}}>{posts[postNumber].summary}</p>

                        </div>

                    </div>


                </div>


            </div>

        </div>


    )


}