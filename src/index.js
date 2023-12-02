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
import "./routes/fonts/MoreSugar-Regular.ttf";
import "./routes/fonts/MoreSugar-Thin.ttf";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
               path: "/",
               element: <Art/>
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
            }
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);