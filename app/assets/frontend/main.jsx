import React from "react";
import ReactDOM from 'react-dom';
import Index from './components/index';

let documentReady = () => {
    let reactNode = document.getElementById("react");
    if (reactNode) {
        ReactDOM.render(<Index />, reactNode);
    }
}

$(documentReady);
