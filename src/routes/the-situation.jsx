import * as React from 'react';
import Game from "../Game";
import Screenshot1 from "./games/the-situation/situation_01.png";
import Screenshot2 from "./games/the-situation/situation_02.png";
import Screenshot3 from "./games/the-situation/situation_03.png";
import Screenshot4 from "./games/the-situation/situation_04.png";
import Screenshot5 from "./games/the-situation/situation_05.png";
import Screenshot6 from "./games/the-situation/situation_06.png";
import Screenshot7 from "./games/the-situation/situation_07.png";
import Screenshot8 from "./games/the-situation/situation_08.png";
import Screenshot9 from "./games/the-situation/situation_09.png";
import Screenshot10 from "./games/the-situation/situation_10.png";
import Screenshot11 from "./games/the-situation/situation_11.png";
import Screenshot12 from "./games/the-situation/situation_12.png";

const images = [{
    original: Screenshot1, thumbnail: Screenshot1,
}, {
    original: Screenshot2, thumbnail: Screenshot2,
}, {
    original: Screenshot3, thumbnail: Screenshot3,
}, {
    original: Screenshot4, thumbnail: Screenshot4,
}, {
    original: Screenshot5, thumbnail: Screenshot5,
}, {
    original: Screenshot6, thumbnail: Screenshot6,
}, {
    original: Screenshot7, thumbnail: Screenshot7,
}, {
    original: Screenshot8, thumbnail: Screenshot8,
}, {
    original: Screenshot9, thumbnail: Screenshot9,
}, {
    original: Screenshot10, thumbnail: Screenshot10,
}, {
    original: Screenshot11, thumbnail: Screenshot11,
}, {
    original: Screenshot12, thumbnail: Screenshot12,
},

];

export default function TheSituation() {

    return (

        <Game
            markdown={"/games/situation/situation.md"}
            title={"The Situation"}
            date={"April 2025"}
            description={"You are a student at Konkordia University taking the CARD 415: Game Studio class,\n" +
                "and for your game design assignment, you need to create a unique game situation.\n" +
                "Look around the classroom to find a good situation."}

            note={"This game was created during the game development course CART 415 at Concordia University." +
                "Throughout the course, we referred to a book called Situational Game Design by Brian Upton." +
                "This game is based on that book, which outlines the 6 heuristics of situational game design. " +
                "So shoutout to Brian Upton for his concepts that guided us in the making of this game " +
                "(both in literal content of the game and in game design)."}

            members={
                [
                    {
                        id: 0,
                        name: "Tuana Bıçakcı",
                        title: "3D Artist, Environment Designer",
                        link: "https://tuanabicakci.dev/"
                    }
                ]
            }

            github={"https://github.com/shinykiwi/situation-game"}
            tools={[
                "Unity / C#",
                "Blender",
                "Substance Painter"
            ]}

            video={"https://www.youtube.com/embed/JfHMwA89m-s"}

            images={images}
            platforms={"Windows and Mac"}
            itchio={<iframe frameBorder="0"
                            src="https://itch.io/embed/3459849?linkback=true&amp;bg_color=F4F2EC&amp;fg_color=222222&amp;link_color=587eb8&amp;border_color=404a50"
                            width="552" height="167"><a href="https://shinykiwi.itch.io/the-situation">The
                Situation
                by Kira Fountain & Tuana Bicakci</a></iframe>}

        />

    )

}