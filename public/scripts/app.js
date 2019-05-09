'use strict';

console.log('App.js is running');

var app = {
    title: 'This is a title',
    sub: 'This is a Sub title'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.sub
    ),
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

var user = {
    name: 'Hamzah',
    age: 27,
    location: 'Florida'
};

function getLocation(location) {
    if (!location) {
        return 'Unknown';
    }
    return location;
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot);
