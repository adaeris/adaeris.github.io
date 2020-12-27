import React, { useState } from "react";
import Constellation from "../images/constellation.jpg";
import { Input } from "./input";
export function WordLockView(props) {
    const validateInput = (key) => {
        if (key.length != 1 || !key.match(/[a-z]/i)) {
            return undefined;
        }
        return key.toUpperCase();
    };
    const [hintOn, setHintOn] = useState(false);
    const hint = () => {
        if (hintOn) {
            return (React.createElement("p", null, "This constellation is part of the zodiac."));
        }
        else {
            return (React.createElement("p", null,
                "If you are stuck, you can get ",
                React.createElement("a", { href: "#", onClick: () => setHintOn(true) }, "a hint"),
                "."));
        }
    };
    return (React.createElement("div", { className: "lock" },
        React.createElement("div", { className: "txt" },
            React.createElement("h1", null, "Telescope calibration"),
            React.createElement("p", null, "You need the telescope to figure out the best time to launch. But first, you need to calibrate the telescope."),
            React.createElement("p", null, "To calibrate the telescope, you need to point it to a known constellation and input the constellation's name."),
            React.createElement("p", null, "You see the constellation below in the night sky...")),
        React.createElement("div", { style: { marginTop: "20px", marginBottom: "20px" } },
            React.createElement("img", { src: Constellation, style: { margin: "auto", display: "block", maxWidth: "600px", width: "90%" } })),
        React.createElement(Input, { expected: "SAGITTARIUS", onDone: props.onDone, validateInput: validateInput }),
        React.createElement("div", { className: "txt" },
            React.createElement("p", null,
                "... or you could always ",
                React.createElement("a", { href: "#", onClick: props.onBack }, "go back"),
                " and try again later."),
            hint())));
}
//# sourceMappingURL=wlock.js.map