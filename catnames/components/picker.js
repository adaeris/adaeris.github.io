var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import SelectSearch from 'react-select-search';
export const PickerView = React.forwardRef((props, ref) => {
    const [options, setOptions] = useState(undefined);
    const [value, setValue] = useState("");
    const getFile = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(props.path);
        if (!response.ok) {
            return;
        }
        const text = yield response.text();
        const lines = text.split("\n");
        const result = [];
        lines.forEach((element, idx) => {
            if (element != "") {
                result.push({ name: element, value: element });
            }
        });
        setOptions(result);
        setValue(result[0].value);
        props.onNameChange(result[0].value);
    });
    const random = () => {
        const newValue = options[Math.floor(Math.random() * options.length)].value;
        setValue(newValue);
        props.onNameChange(newValue);
    };
    useEffect(() => {
        if (!options) {
            getFile();
        }
    });
    return (React.createElement("div", { className: "picker" },
        React.createElement("span", null, props.title),
        React.createElement(SelectSearch, { options: options, value: value, search: true, onChange: props.onNameChange }),
        React.createElement("button", { onClick: random, ref: ref }, "\uD83D\uDC08")));
});
//# sourceMappingURL=picker.js.map