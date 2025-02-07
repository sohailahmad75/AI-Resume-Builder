import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import SignIn from "@/auth/sign-in/index.jsx";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>
        },
        {
            path: '/auth/sign-in',
            element: <SignIn/>
        }
    ]
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
