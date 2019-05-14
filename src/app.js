console.log('App.js is running');

const app = {
    title: 'This is a title',
    sub: 'This is a tle',
    options: ['one ','two ']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.sub && <p>{app.sub}</p>}
        {app.options.length > 0 ? <p>{app.options}</p> : 'no options'}
        <ol>
        <li>Item one</li>
        <li>Item one</li>
        </ol>
    </div>
);

let count = 0;
const addOne = ()=>{
    count++;
    console.log(' plus one clicked')
    rerender();
   
}
const subOne = ()=>{
    console.log(' sub one clicked')
    count--;
   rerender();
}
const rst = ()=>{
    console.log(' rst clicked')
   count = 0;
   rerender();
}
const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subOne}>-1</button>
    <button onClick={rst}>Reset</button>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot )

const rerender = ()=>{
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subOne}>-1</button>
        <button onClick={rst}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot )
}