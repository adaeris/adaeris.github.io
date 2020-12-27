import React, { useState } from "react";
import { ColorLockView } from "./clock";
import { DirectionLockView } from "./dlock";
import { NumberLockView } from "./nlock";
import { WordLockView } from "./wlock";
import { FinalView } from "./final";
import Mars from "../images/mars.jpg";
import Computer from "../images/computer.jpg";
import Telescope from "../images/telescope.jpg";
import Freezer from "../images/freezer.jpg";
import Trajectory from "../images/trajectory.jpg";
export function StoryView(props) {
    const [computerUnlocked, setComputerUnlocked] = useState(false);
    const [telescopeUnlocked, setTelescopeUnlocked] = useState(false);
    const [freezerUnlocked, setFreezerUnlocked] = useState(false);
    const [trajectoryUnlocked, setTrajectoryUnlocked] = useState(false);
    const [component, setComponent] = useState(undefined);
    const toStory = () => {
        setComponent(undefined);
    };
    const numberLock = (React.createElement(NumberLockView, { onDone: () => { setComputerUnlocked(true); toStory(); }, onBack: toStory }));
    const wordLock = (React.createElement(WordLockView, { onDone: () => { setTelescopeUnlocked(true); toStory(); }, onBack: toStory }));
    const colorLock = ColorLockView({
        onDone: () => { setFreezerUnlocked(true); toStory(); },
        onBack: toStory
    });
    const directionLock = (React.createElement(DirectionLockView, { onDone: () => { setTrajectoryUnlocked(true); toStory(); }, onBack: toStory }));
    const computer = () => {
        if (computerUnlocked) {
            return (React.createElement("div", null,
                React.createElement("img", { src: Computer }),
                React.createElement("p", null, "The computer is crunching numbers...")));
        }
        else {
            return (React.createElement("div", null,
                React.createElement("p", null,
                    "Getting back to Earth requires some advanced math, so you need to ",
                    React.createElement("a", { href: "#", onClick: () => setComponent(numberLock) }, "use the computer"),
                    ".")));
        }
    };
    const telescope = () => {
        if (telescopeUnlocked) {
            return (React.createElement("div", null,
                React.createElement("img", { src: Telescope }),
                React.createElement("p", null, "You can see Earth through the telescope.")));
        }
        else {
            return (React.createElement("div", null,
                React.createElement("p", null,
                    "Look ",
                    React.createElement("a", { href: "#", onClick: () => setComponent(wordLock) }, "through the telescope"),
                    " to figure out the best time to launch.")));
        }
    };
    const freezer = () => {
        if (freezerUnlocked) {
            return (React.createElement("div", null,
                React.createElement("img", { src: Freezer }),
                React.createElement("p", null, "You found some frozen lasagna. Yum!")));
        }
        else {
            return (React.createElement("div", null,
                React.createElement("p", null,
                    "You need to ",
                    React.createElement("a", { href: "#", onClick: () => setComponent(colorLock) }, "gather supplies"),
                    " for the long trip back.")));
        }
    };
    const trajectory = () => {
        if (trajectoryUnlocked) {
            return (React.createElement("div", null,
                React.createElement("img", { src: Trajectory }),
                React.createElement("p", null, "You know exactly how to get home")));
        }
        else {
            return (React.createElement("div", null,
                React.createElement("p", null,
                    React.createElement("a", { href: "#", onClick: () => setComponent(directionLock) }, "Plot the trajectory"),
                    " of your rocket before taking off.")));
        }
    };
    const launch = () => {
        if (computerUnlocked && telescopeUnlocked && freezerUnlocked && trajectoryUnlocked) {
            return (React.createElement("div", null,
                React.createElement("p", null, "You are ready to take off."),
                React.createElement("button", { onClick: () => setComponent(React.createElement(FinalView, null)) }, "Launch")));
        }
        else {
            return (React.createElement("div", null));
        }
    };
    const renderStory = () => {
        if (component == undefined) {
            return (React.createElement("div", { className: "story" },
                React.createElement("h1", null, "Escape from the red planet"),
                React.createElement("p", null, "You are trapped on Mars!"),
                React.createElement("img", { src: Mars }),
                React.createElement("p", null, "You need to escape and get back to Earth."),
                computer(),
                telescope(),
                freezer(),
                trajectory(),
                launch()));
        }
        else {
            return (component);
        }
    };
    return (renderStory());
}
//# sourceMappingURL=story.js.map