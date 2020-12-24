import React from "react";
import { Input } from "./input";
export function NumberLockView(props) {
    const validateInput = (key) => {
        if (!+key) {
            return undefined;
        }
        return key;
    };
    return (React.createElement("div", { className: "lock" },
        React.createElement("div", { className: "txt" },
            React.createElement("h1", null, "Computer repair"),
            React.createElement("p", null, "In order to escape the red planet, you need to use the computer. Unfortunately, the computer's emoji unit is miscalibrated and the computer won't function without it. You need to fix it."),
            React.createElement("p", null, "To fix the computer, you need to provide it with the correct emoji values."),
            React.createElement("p", null, "Looking at the computer's memory, you see how some of the emojis add up together. This gives you an idea...")),
        React.createElement("div", { className: "eq" },
            React.createElement("p", null, "\uD83E\uDE90 + \uD83E\uDE90 = 10"),
            React.createElement("p", null, "\uD83E\uDE90 + \uD83C\uDF0C = 14"),
            React.createElement("p", null, "\uD83C\uDF0C + \u2604\uFE0F = 16"),
            React.createElement("p", null, "\u2604\uFE0F + \uD83D\uDEF0\uFE0F = 11")),
        React.createElement("div", { className: "eqinp" },
            React.createElement(Input, { expected: "7549", onDone: props.onDone, validateInput: validateInput }),
            React.createElement("span", { style: { gridColumn: 1, gridRow: 2 } }, "\u2604\uFE0F"),
            React.createElement("span", { style: { gridColumn: 2, gridRow: 2 } }, "\uD83E\uDE90"),
            React.createElement("span", { style: { gridColumn: 3, gridRow: 2 } }, "\uD83D\uDEF0\uFE0F"),
            React.createElement("span", { style: { gridColumn: 4, gridRow: 2 } }, "\uD83C\uDF0C")),
        React.createElement("div", null,
            React.createElement("p", null,
                "... or you could always ",
                React.createElement("a", { href: "#", onClick: props.onBack }, "go back"),
                " and try again later."))));
}
//# sourceMappingURL=nlock.js.map