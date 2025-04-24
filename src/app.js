import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Section from "./components/Section";

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Section></Section>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
