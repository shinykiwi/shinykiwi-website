import {Outlet} from "react-router-dom";
// import CodeIcon from '@mui/icons-material/Code';

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <div>
                        <img className={'pfp'} src='https://shinykiwi.dev/img/profile-pic.JPG' alt={'profile picture'}/>

                    </div>
                    <div>
                        <h1>Kira Fountain</h1>
                        <p><em>Gamedev student based in Montreal.</em></p>
                    </div>
                    <ul>
                        <li>
                            {/*<CodeIcon></CodeIcon>*/}
                            <a href={`/contacts/1`}>Code</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Art</a>
                        </li>
                        <li>
                            <a href={`/contacts/3`}>Updates</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}

