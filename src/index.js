import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from './routes/home/Home';
import { About } from './routes/about/About';
import { Main } from './Main';
import { Project } from './routes/project/Project';

const router = createHashRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Project />
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);