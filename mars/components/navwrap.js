import React, { useState } from "react";
import { NumberLockView } from "./nlock";
import { PlaceholderView } from "./placeholder";
import { StoryView } from "./story";
export function NavWrapView(props) {
    const story = StoryView({});
    const numberLock = NumberLockView({ onDone: () => alert("Unlocked") });
    const placeholder = PlaceholderView({});
    const [component, setComponent] = useState(numberLock);
    const handleOnChange = (e) => {
        if (e.target.value == "Home") {
            setComponent(story);
        }
        else if (e.target.value == "Number Lock") {
            setComponent(numberLock);
        }
        else {
            setComponent(placeholder);
        }
    };
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { style: { position: "absolute", top: "10px" } },
            React.createElement("select", { onChange: handleOnChange },
                React.createElement("option", null, "Home"),
                React.createElement("option", null, "Number Lock"),
                React.createElement("option", null, "Direction Lock"),
                React.createElement("option", null, "Color Lock"),
                React.createElement("option", null, "Word Lock"))),
        component));
}
//# sourceMappingURL=navwrap.js.map