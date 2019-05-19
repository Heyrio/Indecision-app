class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Idecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
            <button>What Should I do</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return <p>Options component here</p>
    }
}

class AddOptions extends React.Component{
    render(){
        return <p>Add option component</p>
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(jsx, document.querySelector('#app'));