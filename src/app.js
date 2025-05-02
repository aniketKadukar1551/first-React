import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Section from "./components/Section";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import CardMenu from "./components/CardMenu";
import Spinner from "./components/Spinner";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "",
                element: <Section></Section>
            },
            {
                path: "about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "contactus",
                element: <ContactUs></ContactUs>
            },
            {
                path: "restaurant/:resId",
                element: <CardMenu></CardMenu>
            },
            {
                path: "grocery",
                element: <Suspense fallback={<Spinner></Spinner>}><Grocery></Grocery></Suspense>
            }
        ],
        errorElement: <Error></Error>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>)
