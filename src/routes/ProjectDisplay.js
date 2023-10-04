import * as React from "react";

export default function ProjectDisplay(props) {
    return (
        <div>
            <h1>code.</h1>
            <div className={"projects"}>

                <div className={"projects-panel"}>
                    <ul>
                        <a href={"/code/miracle-daycare"}><li>Miracle Daycare</li></a>

                        <li>
                            there
                        </li>
                    </ul>
                </div>

                <div className={"content-panel"}>


                    <p>{props.project}</p>


                </div>
            </div>
        </div>

    );
}