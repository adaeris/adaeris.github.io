import React, { useRef, useState } from "react";
import { PickerView } from "./picker";
export function MainView(props) {
    const [prefix, setPrefix] = useState(" ");
    const [suffix, setSuffix] = useState(" ");
    const prefixRef = useRef(null);
    const suffixRef = useRef(null);
    const random = () => {
        if (prefixRef.current) {
            prefixRef.current.click();
        }
        if (suffixRef.current) {
            suffixRef.current.click();
        }
    };
    return (React.createElement("div", { className: "main" },
        React.createElement("p", null,
            prefix,
            suffix),
        React.createElement(PickerView, { title: "Prefix", uid: "pid", path: props.prefixes, onNameChange: setPrefix, ref: prefixRef }),
        React.createElement(PickerView, { title: "Suffix", uid: "sid", path: props.suffixes, onNameChange: setSuffix, ref: suffixRef }),
        React.createElement("button", { className: "randomBtn", onClick: random }, "Random")));
}
//# sourceMappingURL=main.js.map