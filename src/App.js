import './App.css';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from'./components/pages/Home';
import Auth from './components/Auth';

function App() {

  return (
    <div>
  
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Auth}/>
        </Switch>
      </Router>
      
     
      
    
    </div>
  );
}

export default App;
