import React, { useState } from "react";
export function Input(props) {
    const [values, setValues] = useState([]);
    const handleFocus = (e) => {
        e.target.style.borderColor = "green";
    };
    const handleBlur = (e) => {
        e.target.style.borderColor = "lightgray";
    };
    const handleKeyDown = (e) => {
        e.preventDefault();
        const col = +(e.currentTarget.dataset["id"]);
        if (e.key == "ArrowLeft" && col > 1) {
            document.getElementById("box" + (col - 1)).focus();
            return;
        }
        else if (e.key == "ArrowRight" && col < props.expected.length) {
            document.getElementById("box" + (col + 1)).focus();
            return;
        }
        else if (e.key == "Backspace") {
            values[col - 1] = "";
            setValues(values);
            e.currentTarget.value = "";
            return;
        }
        const val = props.validateInput(e.key);
        if (val === undefined) {
            return;
        }
        values[col - 1] = val;
        e.currentTarget.value = val;
        setValues(values);
        if (done()) {
            props.onDone();
            return;
        }
        if (col != props.expected.length) {
            document.getElementById("box" + (col + 1)).focus();
        }
    };
    const done = () => {
        for (let i = 0; i < props.expected.length; i++) {
            if (props.expected[i] !== values[i]) {
                return false;
            }
        }
        return true;
    };
    const renderInputs = () => {
        const inputs = [];
        for (let i = 1; i <= props.expected.length; i++) {
            inputs.push(React.createElement("input", { id: "box" + i, style: { gridColumn: i }, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown, value: values[i - 1], type: "text", "data-id": i }));
        }
        return inputs;
    };
    return (React.createElement("div", { className: "inp", style: { gridColumnStart: 1, gridColumnEnd: "span " + props.expected.length } }, renderInputs()));
}
//# sourceMappingURL=input.js.map