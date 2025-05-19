import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Code from "./routes/code";
import Art from "./routes/art";
import Other from "./routes/other";
import MiracleDaycare from "./routes/miracle-daycare";
import MedievalGame from "./routes/1347-game";
import Prisma from "./routes/prisma";
import Freddyscafe from "./routes/freddyscafe";
import Sdl2Basic from "./routes/sdl2-basic";
import Me from "./routes/me";
import DreamTeam from "./routes/dream-team";
import AcademicWeapon from "./routes/academic-weapon";
import StarlitCatch from "./routes/starlit-catch";
import SleepyHavenHotel from "./routes/sleepy-haven-hotel";
import TheLemonGame from "./routes/lemon-game";
import Posts from "./routes/posts";
import TheSituation from "./routes/the-situation";
import AcademicMaster from "./routes/academic-master";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
               path: "/",
               element: <Code/>
            },
            {
                path: "code",
                element: <Code/>
            },
            {
                path: "art",
                element: <Art/>
            },
            {
                path: "other",
                element: <Other/>
            },
            {
                path: "me",
                element: <Me/>
            },
            {
                path: "posts",
                element: <Posts/>
            },
            {
                path: "code/miracle-daycare",
                element: <MiracleDaycare/>
            },
            {
                path: "code/1347-game",
                element: <MedievalGame/>
            },
            {
                path: "code/prisma",
                element: <Prisma/>
            },
            {
                path: "code/freddys-cafe",
                element: <Freddyscafe/>
            },
            {
                path: "code/dream-team",
                element: <DreamTeam/>
            },
            {
                path: "code/academic-weapon",
                element: <AcademicWeapon/>
            },
            {
                path: "code/starlit-catch",
                element: <StarlitCatch/>
            },
            {
                path: "code/sleepy-haven",
                element: <SleepyHavenHotel/>
            },
            {
                path: "code/the-lemon-game",
                element: <TheLemonGame/>
            },
            {
                path: "code/the-situation",
                element: <TheSituation/>
            },
            {
                path: "code/academic-master",
                element: <AcademicMaster/>
            },
            {
                path: "code/sdl2-basic",
                element: <Sdl2Basic/>
            }

        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);