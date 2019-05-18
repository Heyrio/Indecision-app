"use strict";

var app = document.querySelector('#app');
var visability = false;

var toggleVisability = function toggleVisability() {

    visability = !visability;
    render();
};

var render = function render() {
    var toggle = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visability toggle"
        ),
        visability && React.createElement(
            "p",
            null,
            "Hidden text"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisability },
            visability ? "Hide details" : "Show Details"
        )
    );
    ReactDOM.render(toggle, app);
};

render();
