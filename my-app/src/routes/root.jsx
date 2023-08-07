import {Outlet} from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';
import ArticleIcon from '@mui/icons-material/Article';

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>

                    <div>
                        <img className={'pfp'} src='https://shinykiwi.dev/img/profile-pic.JPG' alt={'profile'}/>

                    </div>
                    <div>
                        <h1>Kira Fountain</h1>
                        <p><em>Gamedev student based in Montreal.</em></p>
                    </div>
                    <ul>
                        <li>

                            <a href={`/`}>
                                <HomeIcon color={'disabled'}/>
                                Home</a>
                        </li>
                        <li>

                            <a href={`/code`}>
                                <CodeIcon color={'disabled'}/>Code</a>
                        </li>
                        <li>
                            <a href={`/art`}>
                                <BrushIcon color={'disabled'}/>
                                Art</a>
                        </li>
                        <li>
                            <a href={`/updates`}>
                                <ArticleIcon color={'disabled'}/>
                                Updates</a>
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

