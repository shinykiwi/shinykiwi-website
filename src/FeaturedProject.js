import * as React from "react";
import Button from "@mui/material/Button";
import {grey} from "@mui/material/colors";
import moment from "moment";

export default function FeaturedProject(props) {

    const image = "freddyscafe/camera-setup.png"
    const paragraph = "I discuss our development process for the Gamerella 2023 submission, made in Unreal Engine 5."
    const date = moment("202401310250", "YYYYMMDDHHmm").fromNow()
    const pageLink = "./code/freddys-cafe"
    const title = "How We Made Freddys Cafe"


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
                        }}>"{title}"</h3>
                        <em><p style={dateSX}>Updated {date}</p></em>

                    </div>
                    <div style={{display: "flex"}}>
                        <img style={{
                            width: "100%",
                            filter: "drop-shadow(3px 3px 2px black)",
                            objectFit: "cover",
                            marginRight: "2rem"
                        }} src={require(`./routes/games/${image}`)}/>
                        <div style={{width: "30%"}}>
                            <a href={pageLink} style={buttonSX}>READ</a>
                            <p style={{marginTop: "2rem", textAlign: "justify"}}>{paragraph}</p>

                        </div>

                    </div>


                </div>


            </div>

        </div>


    )


}