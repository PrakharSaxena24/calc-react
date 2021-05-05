import React, {Component} from "react";
import "./App.css";
import Results from "./components/results.js"
import KeyPad from "./components/keypad.js"

class App extends Component {
 constructor() {
   super( );
   this.state = {
     result:""
   }

 }

onClick = button => {
  if(button== "="){
    this.calculate()
  }
  
   else if(button== "C"){
      this.reset()
    }
    
     else if(button== "CE"){
        this.backspace()
      }
      else{
        this.setState({
          result: this.state.result +button
        })
      }

};

 calculate = ()=>{
   try{
   this.setState({
     result:(eval(this.state.result)||"") + ""
   })
 }
 catch(e) {
   this.setState({
     result:"error"
   })
 }
 };
reset=() => {
  this.setState({
    result:""
  })
};

backspace = () =>{
  this.setState({
    result:this.state.result.slice(0,-1)

  })
};

 render(){
   return (
     <div>
       <div className="calculator-body">
         <hi>SimpleCalculator</hi>
         <Results result={this.state.result}/>
         <KeyPad onClick={this.onClick}/>
       </div>
     </div>
   )
 }
  
}

export default App;