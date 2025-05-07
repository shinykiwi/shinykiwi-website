import * as React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import Screenshot1 from "./games/starlit-catch/starlit-catch_01.png";
import Screenshot2 from "./games/starlit-catch/starlit-catch_02.png";
import Screenshot3 from "./games/starlit-catch/starlit-catch_03.png";
import Screenshot4 from "./games/starlit-catch/starlit-catch_04.png";
import Screenshot5 from "./games/starlit-catch/starlit-catch_05.png";
import Game from "../Game";


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
},

];

export default function StarlitCatch() {

    return (

        <Game
            markdown={"/games/starlit-catch/starlit-catch.md"}
            title={"Starlit Catch"}
            date={"November 2024"}
            description={"Relax in your cottage and enjoy a peaceful fishing adventure. Relax by the water, enjoy the quiet, and take your time—there’s no rush. Just cast your line and enjoy a peaceful fishing experience in the woods."}
            note={"This game was made for GAMERella 2024 jam within the 36 hours given. The theme for this competition was “Hearth”, and we worked in a team of 5. I worked as a programmer and tech artist. All assets and code were made within the duration of the jam."}
            members={[
                {
                id: 0,
                name: "Tuana Bıçakcı",
                title: "3D Artist, Environment Designer",
                link: "https://tuanabicakci.dev/"
                },

                {
                    id: 1,
                    name: "Zaid Minhas",
                    title: "Programmer",
                    link: "https://github.com/ZaidMinhas"
                },

                {
                    id: 2,
                    name: "Elena Osman",
                    title: "2D Artist, UI Designer",
                    link: "https://www.artstation.com/lenravi"
                },

                {
                    id: 3,
                    name: "Sam Dalwood",
                    title: "Composer, Sound Designer",
                    link: "https://linktr.ee/fauxless"
                },

            ]}

            github={"https://github.com/shinykiwi/cinderella-jam"}
            tools={["Unity / C#", "Blender", "Mixamo", "Substance Painter"]}

            video={null}

            images={images}

            platforms={"Windows and Mac"}

            itchio={<iframe frameBorder="0"
                            src="https://itch.io/embed/3132157?linkback=true&amp;border_width=2&amp;bg_color=0048ba&amp;fg_color=f7ecc5&amp;link_color=ffb32a&amp;border_color=373163"
                            width="554" height="169"><a href="https://tuanabicakci.itch.io/starlit-catch">Starlit
                Catch by Tuana Bıçakcı, Zaid The Programmer, Kira Fountain</a></iframe>}

        />)

}