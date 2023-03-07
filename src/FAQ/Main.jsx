import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./data";

const Main = () => {
    return (
        <div>
            <h1>React Accordion Demo</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Main;
