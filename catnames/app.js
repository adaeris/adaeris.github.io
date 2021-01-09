import React from "react";
import ReactDOM from "react-dom";
import { MainView } from "./components/main";
import "./styles/main.css";
import "./styles/select.css";
ReactDOM.render(React.createElement(MainView, { prefixes: "https://adaeris.github.io/catnames/prefixes.txt", suffixes: "https://adaeris.github.io/catnames/suffixes.txt" }), document.getElementById("content"));
//# sourceMappingURL=app.js.map