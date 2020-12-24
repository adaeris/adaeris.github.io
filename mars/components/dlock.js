import React from "react";
import { Input } from "./input";
import Directions from "../images/directions.jpg";
export function DirectionLockView(props) {
    const validateInput = (key) => {
        if (key.toUpperCase() == "W") {
            return "↑";
        }
        if (key.toUpperCase() == "S") {
            return "↓";
        }
        if (key.toUpperCase() == "A") {
            return "←";
        }
        if (key.toUpperCase() == "D") {
            return "→";
        }
        if (!+key) {
            return undefined;
        }
        return key;
    };
    return (React.createElement("div", { className: "lock" },
        React.createElement("div", { className: "txt" },
            React.createElement("h1", null, "Trajectory plotting"),
            React.createElement("p", null, "You need to plot the trajectory of the rocket you will use to escape."),
            React.createElement("p", null, "Start by finding the asteroid belt in the night sky. Then try to find Earth. You don't want to head towards Saturn. Jupiter is also not your destination. You just want to get back to the blue planet.")),
        React.createElement("div", null,
            React.createElement("img", { src: Directions, style: { margin: "auto", display: "block", maxWidth: "600px", width: "90%" } })),
        React.createElement("div", { className: "legend", style: { textAlign: "center" } },
            React.createElement("p", null,
                React.createElement("span", { style: { backgroundColor: "#ffffff" } },
                    React.createElement("strong", null, "W"),
                    " \u2191"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#ffffff" } },
                    React.createElement("strong", null, "A"),
                    " \u2190"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#ffffff" } },
                    React.createElement("strong", null, "S"),
                    " \u2193"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#ffffff" } },
                    React.createElement("strong", null, "D"),
                    " \u2192"))),
        React.createElement(Input, { expected: "\u2191\u2192\u2193\u2190\u2192", onDone: props.onDone, validateInput: validateInput }),
        React.createElement("div", null,
            React.createElement("p", null,
                "... or you could always ",
                React.createElement("a", { href: "#", onClick: props.onBack }, "go back"),
                " and try again later."))));
}
//# sourceMappingURL=dlock.js.map