console.log('App.js is running');

var app = {
    title: 'This is a title',
    sub: 'This is a Sub title'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.sub}</p>
        <ol>
        <li>Item one</li>
        <li>Item one</li>
        </ol>
    </div>
);


var user = {
    name: 'Hamzah',
    age: 27,
    location: 'Florida'
};

function getLocation(location){
    if(!location){
        return 'Unknown'
    }
    return location;
   
}

var templateTwo = (
    <div>
    <h1> {user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot )

