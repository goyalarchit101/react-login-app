import logo from './logo.svg';
import './App.css';
import { Route, Switch , Link } from 'react-router-dom';
import Admin from "../src/components/Admin"
import Login from "../src/components/Login"
import Logout from "../src/components/Logout"

function App() {
  return (
    <Switch>
      <Route exact path = "/" component ={Login}/>
      <Route path = "/admin" component ={Admin}/>
      <Route path = "/logout" component ={Logout}/>
    </Switch>
  );
}

const A = () =>{
  return (
    <div>
      <h1>this one is A component</h1>
      <Link to ="/b">B component</Link>
    </div>
  )
}

const B = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Link to="/c">C component</Link>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const C = () =>{
  return (
    <div>
      <h1>this one is C component</h1>
    </div>
  )
}

export default App;
