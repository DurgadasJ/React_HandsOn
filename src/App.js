import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import {use, useState} from 'react';

function App() {
  
  const[count,setCount]= useState(0);

  const [show,setShow]=useState(true); 

  const [name, setName]= useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Hello, ${name}`);
  }

    return (
      <div>
        <h1>Welcome to My React App!</h1>
        <Welcome name="Joe" />
        <p>This is your first component</p>
        <h1>Counter App</h1>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
        <button onClick={()=> setCount(count-1)}>Decrease Count</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        <br></br>
        <br></br>
        <button onClick={()=> setShow(!show)}>Toggle Message</button>
        {show && <p>This is a toggle message!</p>}

        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e)=> setName(e.target.value)}           
          />
          <button type="submit"> Greet</button>

        </form>
      </div>
    );
}

export default App;
