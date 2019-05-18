const app = document.querySelector('#app');
let visability = false;

const toggleVisability = ()=>{
   
    visability = !visability
        render();
    }



const render = ()=>{
    const toggle = (
        <div>
       <h1>Visability toggle</h1>
       {visability && <p>Hidden text</p>}
       <button onClick={toggleVisability}>
       {visability ? "Hide details": "Show Details"}
       </button>
        </div>
    )
    ReactDOM.render(toggle,app);
}

render();



