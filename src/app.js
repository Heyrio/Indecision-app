console.log('App.js is running');

const app = {
    title: 'Indecision App',
    sub: 'put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const reset = ()=>{
    app.options = [];
    render();
}

const appRoot = document.querySelector('#app');

const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.sub && <p>{app.sub}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : 'no options'}
            <p>{app.options.length}</p>
            <button onClick={reset}>Clear</button>
            <ol>
            <li>Item one</li>
            <li>Item one</li>
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot )
}

render();




