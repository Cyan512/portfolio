import * as React from "react";
import {lazy} from 'react'
import {Navigate} from 'react-router-dom'

export interface RouteConfig {
    path: string
    element: React.ReactNode
    children?: RouteConfig[]
}

const HomePage = lazy(() => import("@/ui/pages/home/Page"))
const AboutPage = lazy(() => import("@/ui/pages/about/Page"))
const ProjectsPage = lazy(() => import("@/ui/pages/projects/Page"))
const NotFoundPage = lazy(() => import("@/ui/pages/notFound/Page"))

export const routes: RouteConfig[] = [
    {
        path: "/home",
        element: <Navigate to="/" replace/>
    },
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    },
    {
        path: "/projects",
        element: <ProjectsPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]