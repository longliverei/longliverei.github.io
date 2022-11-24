import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import { Portfolio } from './Portfolio';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Portfolio />
    },
    {
        path: "/about",
        element: <Portfolio />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);