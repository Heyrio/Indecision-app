'use strict';

console.log('App.js is running');

var app = {
    title: 'This is a title',
    sub: 'This is a tle',
    options: ['one ', 'two ']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.sub && React.createElement(
        'p',
        null,
        app.sub
    ),
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        app.options
    ) : 'no options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item one'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log(' plus one clicked');
    rerender();
};
var subOne = function subOne() {
    console.log(' sub one clicked');
    count--;
    rerender();
};
var rst = function rst() {
    console.log(' rst clicked');
    count = 0;
    rerender();
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: subOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: rst },
        'Reset'
    )
);

var appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot);

var rerender = function rerender() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: subOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: rst },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
