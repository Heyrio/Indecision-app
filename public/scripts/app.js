'use strict';

var toggle = function toggle() {
    React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hey there'
        )
    );
};

var appRoot = document.querySelector('#app');

ReactDom.render(toggle, appRoot);
