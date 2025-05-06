import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Section from "./components/Section";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import CardMenu from "./components/CardMenu";
import Spinner from "./components/Spinner";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    const [userName, setUserName] = useState("")

    useEffect(() => {
        setUserName("Aniket")
    }, [])

    return (
        <UserContext.Provider value={{defaultUser: userName, setUserName}}>
            <div className="app">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </UserContext.Provider>
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
