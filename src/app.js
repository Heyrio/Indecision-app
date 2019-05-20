class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['thing one', 'thing two', 'thing four']
        return(
            <div>
        <Header title ={title} subtitle={subtitle}/>
        <Action />
        <Options options = {options} />
        <AddOptions />
        </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick(){
        alert('hola');
    }
    render(){
        return (
            <div>
            <button onClick={this.handlePick}>What Should I do</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){

        console.log(this.props.options);
    }
    render(){
        return (
            <div>
            <button onClick={this.removeAll}>Clear All</button>
           {this.props.options.map((option)=>{
               return <Option key={option} optionText={option}/>
           })}
            <Option/>
            
            
            </div>
            
        )
    }
}

class Option extends React.Component{
    render(){  
        return (
            <div>
            {this.props.optionText}
            
            </div>
        )
    }
}


class AddOptions extends React.Component{
    addOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
            <form onSubmit ={this.addOption}>
            <input type = "text" name="option"></input>
            <button type='submit'>Submit</button>
            </form>
            
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));