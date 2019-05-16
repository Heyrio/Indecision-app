'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    sub: 'put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var reset = function reset() {
    app.options = [];
    render();
};

var appRoot = document.querySelector('#app');

var render = function render() {
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
            'Here are your options'
        ) : 'no options',
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Clear'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
