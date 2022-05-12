import React,{Component} from "react"
import './App.css';
import axios from 'axios'
import DisplayData from "./components/DisplayData";
import Loding from "./components/Loding";

class App extends Component{
  render(){
      return (
        <div className="container">
          <DisplayData/>
        </div>
    );
  }
}

export default App;