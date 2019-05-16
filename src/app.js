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

const onMakeDecision = ()=>{
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.option[randomNum];
}

const appRoot = document.querySelector('#app');

const numbers = [55, 101, 1000];

const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.sub && <p>{app.sub}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : 'no options'}
            <button disabled={app.options.length === 0} onClick= {onMakeDecision}>What should I do?</button>
            <button onClick={reset}>Clear</button>
            <ol>
            {
                app.options.map((opt)=><li key={opt}>{opt}</li>)
            }
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




