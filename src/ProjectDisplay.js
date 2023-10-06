import * as React from "react";

export default function ProjectDisplay(props) {
    return (
        <div>
            <div className={"projects"}>

                <div className={"projects-panel"}>
                    <ul>
                        <a href={"/code/miracle-daycare"}><li>Miracle Daycare</li></a>
                        <a href={"/code/1347-game"}><li>1347 Game</li></a>

                    </ul>
                </div>

                <div className={"content-panel"}>


                    <p>{props.project}</p>


                </div>
            </div>
        </div>

    );
}