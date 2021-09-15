import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Admin from "../src/components/Admin";
import Login from "../src/components/Login";
import Logout from "../src/components/Logout";
import Register from "../src/components/Register";
import Photos from "../src/components/Photos";
import Posts from "../src/components/Posts";
import Navbar from "../src/components/navbar";

function App() {
  return (
    <div className="bg-secondary">
      <div className="container">
        <div className="col-sm-8 col-sm-offset-0 mt-5">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />

            <div>
              <Navbar/>
              <Route path="/photos" component={Photos} />
              <Route path="/posts" component={Posts} />
              <Route path="/admin" component={Admin} />
            </div>

          </Switch>
        </div>
      </div>
    </div>
  );
}

const A = () => {
  return (
    <div>
      <h1>this one is A component</h1>
      <Link to="/b">B component</Link>
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

const C = () => {
  return (
    <div>
      <h1>this one is C component</h1>
    </div>
  )
}

export default App;
