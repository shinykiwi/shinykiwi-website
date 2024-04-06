import * as React from "react";

export default function ProjectDisplay(props) {
    return (
        <div >
            <div className={"projects"}>

                <div className={"content-panel"}>

                    <p>{props.project}</p>

                </div>
            </div>
        </div>

    );
}