import React from "react";
import { Input } from "./input";
import Stars from "../images/stars.jpg";
export function ColorLockView(props) {
    const validateInput = (key) => {
        if (key.length != 1 || !key.match(/[wbcory]/i)) {
            return undefined;
        }
        return key.toUpperCase();
    };
    return (React.createElement("div", { className: "lock" },
        React.createElement("div", { className: "txt" },
            React.createElement("h1", null, "Gathering supplies"),
            React.createElement("p", null, "You will need some food supplies on your trip back to Earth, but the freezer is locked. You see the following password hint scribbled on a Post-it:"),
            React.createElement("p", { style: { textAlign: "center" } },
                React.createElement("em", null, "Star colors from hottest to coolest")),
            React.createElement("p", null, "This and the picture underneath it should be enough for you to figure out the password...")),
        React.createElement("div", null,
            React.createElement("img", { src: Stars, style: { margin: "auto", display: "block", maxWidth: "600px", width: "90%" } })),
        React.createElement("div", { className: "legend", style: { textAlign: "center" } },
            React.createElement("p", null,
                React.createElement("span", { style: { backgroundColor: "#ffffff" } },
                    React.createElement("strong", null, "W"),
                    "hite"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#ffc000" } },
                    React.createElement("strong", null, "O"),
                    "range"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#45c6d9" } },
                    React.createElement("strong", null, "C"),
                    "yan"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#ffff01" } },
                    React.createElement("strong", null, "Y"),
                    "ellow"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#c00000" } },
                    React.createElement("strong", null, "R"),
                    "ed"),
                " ",
                React.createElement("span", { style: { backgroundColor: "#01b0f1" } },
                    React.createElement("strong", null, "B"),
                    "lue"))),
        React.createElement("div", null,
            React.createElement(Input, { expected: "BCWYOR", onDone: props.onDone, validateInput: validateInput })),
        React.createElement("div", { className: "txt" },
            React.createElement("p", null,
                "... or you could always ",
                React.createElement("a", { href: "#", onClick: props.onBack }, "go back"),
                " and try again later."),
            React.createElement("p", null,
                "If you are stuck, you can get ",
                React.createElement("a", { href: "https://www.dkfindout.com/us/space/stars-and-galaxies/types-star/", target: "_blank" }, "a hint"),
                "."))));
}
//# sourceMappingURL=clock.js.map