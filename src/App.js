import React, { Component } from 'react';
import './App.css';

function count(fname) {
  let sum = 0;
  let totalSum = 0;
  for (var i = 0; i < fname.length; i++) {
    const element = fname[i];
    // console.log('character code for', fname[i], 'is', fname.charCodeAt(i));
    // let numVal = ((fname.charCodeAt(i) - 97) % 9) + 1; //the same as switch info
    let value = 0;
    switch (element) {
      case 'a':
      case 'j':
      case 's':
        value = 1;
        break;
      case 'b':
      case 'k':
      case 't':
        value = 2;
        break;
      case 'c':
      case 'l':
      case 'u':
        value = 3;
        break;   
      case 'd':
      case 'm':
      case 'v':
        value = 4;
        break;
      case 'e':
      case 'n':
      case 'w':
        value = 5;
        break; 
      case 'f':
      case 'o':
      case 'x':
        value = 6;
        break;
      case 'g':
      case 'p':
      case 'y':
        value = 7;
        break;
      case 'h':
      case 'q':
      case 'z':
        value = 8;
        break;
      case 'i':
      case 'r':
        value = 9;
        break; 
    }
    sum += value; //This line will plus all the numbers together and get out 2 numbers. For ex: David is 22
  }
  //Got out only 1 number after all. For ex: 22 => 2+2=4
  sum = sum + ''; //turns the number into a string
  for (var i = 0; i < sum.length; i++) {
    const character = sum[i];
    totalSum += parseInt(character); // gets the numeric value from the character '1', '2', etc.
  }
  return totalSum;
}
console.log('count', count('David'));


//This function is turning the totalSum to a result.
function show(totalSum){
  console.log('showing');
  for(var i = 1; i < 30; i++){
    var result;
    switch(totalSum){
      case 1:
        result = "Vibration: The Sun. Associations: Benevolence, creativity and protection. Sun sign: Leo. Symbol: The Lion. Kabbalah: Unity, wholeness, totality. Keywords: Ego, personal identity, leadership, purposeful, tenacious. Days of the month: 1, 10, 19, 28. Number 1 person dislike criticism. They have a strong sense of their own worth, so they usually demand and get respect from others. These folk insist on controlling and organizing everyone and everything and they hold quite definite views, so they can be stubborn when thwarted. There is an underlying desire to be original, creative, and inventive.";
        break;
      case 2:
        result = "Number 2 person fear the unfamiliar or unknown";
        break;
      case 3:
        result = "Number 3 person want nothing less than the truth";
        break;
      case 4:
        result = "Number 4 person";
        break;
      case 5:
        result = "Number 5 person";
        break;
      case 6:
        result = "Number 6 person";
        break;
      case 7:
        result = "Number 7 person";
        break;
      case 8:
        result = "Number 8 person";
        break;
      case 9:
        result = "Number 9 person";
        break;
      case 10: 
        result = "The Wheel of Fortune. This number allows a person to understand his power and to use it wisely. The subject must be self-disciplined and compassionate. This individual must avoid arrogance or lashing out when frustrated.";
        break;
      case 11: 
        result = "The Clenched First. The person needs to learn to compromise and to avoid those things that cause splits in partnerships and relationships. Two separate desires or forces may unite and bring happiness, or they may bring conflict and cause seperation.";
        break;
      case 12:
        result = "The Victim - this number represents the victim who chooses or is forced to make sacrifices so that others can achieve their ends.";
        break;
      case 13:
        result = "Transformation - this person can achieve a position of power and authority. The power associated with Number 13 can bring personal destruction if it is used selfishly. This number warns of the unexpected and unknown. Use the strength of this vibration to adapt to new circumstances.";
        break;
      case 14:
        result = "Challenge - The number represnets the media, publishing, and writing. Partnership and businesses will be of great benefit, but the subject must avoid trusting others too much. Luck comes with speculation; both gains and losses are likely to be temporary.";
        break;
    }
  }
  return result;
}

// console.log('show', show('David'));


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      nameCount: 0,
      showResult: '',
    }
  }

  render() {
    return (
      <div>
        <h1>NUMEROLOGY GAME</h1>
        <h4>Based on Numerology, Orion Plain and Simple by Anne Christie.</h4>
        <p>According to the numerological theory, you always use the full name on your birth certificate when working out your name number. The number is also changed when women change their name to their husband's family name after they married. Moreover, other changes are a matter of choice, or simply a matter of shortening a name, and some wants to be called by middle name rather than their first name. For example, Mike rather Michael, or Riley Smith rather than Phillip Riley Smith, etc. So begin by using the name on your birth certificate, and then use the name you go by on a day-to-day basic.</p>
        <label for="fname">Full Name/ First Name: </label>
        <input type="text" id="fname" placeholder="Type Your Full Name/ First Name (in lowercase)" 
        onChange={(e) => {this.setState({name: e.target.value})}}/>
        <button onClick={() => {
          const nameCount = count(this.state.name);
          this.setState({nameCount: nameCount})
          this.setState({showResult: show(nameCount)})
        }}>Submit</button>
        <p>Your name number is: {this.state.nameCount}</p>
        <p>Your result is: {this.state.showResult}</p>
      </div>
    );
  }
}

export default App;
