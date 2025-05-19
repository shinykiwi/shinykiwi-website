import * as React from 'react';
import Game from "../Game";
import Screenshot1 from "./games/academic-master/am-01.png";
import Screenshot2 from "./games/academic-master/am-02.png";
import Screenshot3 from "./games/academic-master/am-03.png";

const images = [{
    original: Screenshot1, thumbnail: Screenshot1,
}, {
    original: Screenshot2, thumbnail: Screenshot2,
}, {
    original: Screenshot3, thumbnail: Screenshot3,
}
];

export default function AcademicMaster() {

    return (

        <Game
            markdown={"/games/academic-master/academic-master.md"}
            title={"Academic Master"}
            date={"May 2025"}
            description={"You are a science teacher teaching your first class. You must make decisions that foster engagement, " +
                "learning and avoid burnout. Interact with students while class in is session to get Focus Points, " +
                "which you can spend in the shop to buy upgrades for your classroom that increase things like engagement" +
                " and comprehension for your students, making it more likely for them to pay attention and learn. " +
                "But be careful, because some options might increase burnout for students and have other negative effects, " +
                "so you must use your best judgement to determine what would help your class."}

            note={"This game was created for the UdeM Game Jam 2025, within the 36 hours given. We won 1st place in our " +
                "category of 'Behaviourism and Constructivism', a theme based around teaching prospective teachers how " +
                "to teach. All art and code were made by our team within the time given, with the exception of the icons " +
                "and the sound."}

            members={
                [
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
                        link: "https://zaidminhas.dev"
                    },
                    {
                        id: 2,
                        name: "Nicolas Boyer",
                        title: "Audio Designer, Programmer",
                        link: "https://nicolasboyer.itch.io"
                    }
                ]
            }

            github={"https://github.com/shinykiwi/udem-jam-game"}
            tools={[
                "Unity / C#",
                "Blender",
                "Substance Painter",
                "Mixamo"
            ]}

            video={null}

            images={images}
            platforms={"Windows and Mac"}
            itchio={<iframe frameBorder="0"
                            src="https://itch.io/embed/3530694?linkback=true&amp;bg_color=fcf7ed&amp;fg_color=222222&amp;link_color=239115&amp;border_color=663636"
                            width="552" height="167"><a href="https://shinykiwi.itch.io/academic-master">Academic Master
                by Kira Fountain, Tuana Bıçakcı, Zaid The Programmer, NicolasBoyer</a></iframe>}

        />

    )

}