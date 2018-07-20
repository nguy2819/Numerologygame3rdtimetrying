import React, { Component } from 'react';
import './App.css';

function count(fname) {
  let sum = 0;
  let totalSum = 0;
  for (var i = 0; i < fname.length; i++) {
    const element = fname[i];
    console.log('character code for', fname[i], 'is', fname.charCodeAt(i));
    let value = 0;
    switch (element) {
      case 'a':
        value = 1;
        break;
      case 'b':
        value = 2;
        break;
      case 'c':
        value = 3;
        break;   
      case 'd':
        value = 4;
        break;
      case 'e':
        value = 5;
        break; 
      case 'f':
        value = 6;
        break;
      case 'g':
        value = 7;
        break;
      case 'h':
        value = 8;
        break;
      case 'i':
        value = 9;
        break;
      case 'j':
        value = 1; 
        break;
      case 'k':
        value = 2;
        break;
      case 'l':
        value = 3;
        break;  
      case 'm':
        value = 4;
        break; 
      case 'n':
        value = 5;
        break; 
      case 'o':
        value = 6;
        break;
      case 'p':
        value = 7;
        break;
      case 'q':
        value = 8;
        break;
      case 'r':
        value = 9;
        break;
      case 's':
        value = 1;
        break;
      case 't':
        value = 2;
        break;
      case 'u':
        value = 3;
        break; 
      case 'v':
        value = 4;
        break;  
      case 'w':
        value = 5;
        break; 
      case 'x':
        value = 6;
        break;
      case 'y':
        value = 7;
        break;
      case 'z':
        value = 8;
        break;
    }
    sum += value; //This line will plus all the numbers together and get out 2 numbers. For ex: David is 22
    //Trying to get out only 1 number after all. For ex: 22 => 2+2=4
  }
  sum = sum + '';
  for(var i = 0; i < sum.length; i++) {
    const character = sum[i];
    totalSum += parseInt(character);
  }
  return totalSum;
}
console.log('count', count('David'));

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      nameCount: 0
    }
  }

  render() {
    return (
      <div>
        <h1>NUMEROLOGY GAME</h1>
        <label for="fname">First Name: </label>
        <input type="text" id="fname" placeholder="Type Your First Name in lowercase" onChange={(e) => {this.setState({name: e.target.value})}} />
        <button onClick={() => {
          this.setState({nameCount: count(this.state.name)})
        }}>Submit</button>
        <p>Your number is: {this.state.nameCount}</p>
      </div>
    );
  }
}

export default App;
