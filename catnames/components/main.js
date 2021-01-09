import React, { useState } from "react";
import { PickerView } from "./picker";
export function MainView(props) {
    const [prefix, setPrefix] = useState(" ");
    const [suffix, setSuffix] = useState(" ");
    return (React.createElement("div", { className: "main" },
        React.createElement(PickerView, { title: "Prefix", uid: "pid", path: props.prefixes, onNameChange: setPrefix }),
        React.createElement(PickerView, { title: "Suffix", uid: "sid", path: props.suffixes, onNameChange: setSuffix }),
        React.createElement("p", null,
            prefix,
            suffix)));
}
//# sourceMappingURL=main.js.map