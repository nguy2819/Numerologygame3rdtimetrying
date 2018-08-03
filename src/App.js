import React, { Component } from 'react';
import './App.css';
import firebase from './firebase/firebase';
import Primary from './components/Primary'

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
      case 'A':
      case 'j':
      case 'J':
      case 's':
      case 'S':
        value = 1;
        break;
      case 'b':
      case 'B':
      case 'k':
      case 'K':
      case 't':
      case 'T':
        value = 2;
        break;
      case 'c':
      case 'C':
      case 'l':
      case 'L':
      case 'u':
      case 'U':
        value = 3;
        break;
      case 'd':
      case 'D':
      case 'm':
      case 'M':
      case 'v':
      case 'V':
        value = 4;
        break;
      case 'e':
      case 'E':
      case 'n':
      case 'N':
      case 'w':
      case 'W':
        value = 5;
        break;
      case 'f':
      case 'F':
      case 'o':
      case 'O':
      case 'x':
      case 'X':
        value = 6;
        break;
      case 'g':
      case 'G':
      case 'p':
      case 'P':
      case 'y':
      case 'Y':
        value = 7;
        break;
      case 'h':
      case 'H':
      case 'q':
      case 'Q':
      case 'z':
      case 'Z':
        value = 8;
        break;
      case 'i':
      case 'I':
      case 'r':
      case 'R':
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
function show(totalSum) {
  console.log('showing');
  for (var i = 1; i < 30; i++) {
    var result;
    switch (totalSum) {
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
        result = <p>The Wheel of Fortune.
        <br />This number allows a person to understand his power and to use it wisely.
        <br />The subject must be self-disciplined and compassionate.
        <br />This individual must avoid arrogance or lashing out when frustrated.</p>;
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

//This function will make all the DOB number plus together.
//For ex: 12-01-1990 => 1+2+0+1+1+9+9+0= 23 => 2+3=5
function countDOB(bday) {
  let sumDOB = 0;
  for (var i = 0; i < bday.length; i++) {
    const character1 = bday[i];
    if (character1 !== '-') {
      sumDOB += parseInt(character1); //get numeric value from the character '1', '2', etc.
    }
  }
  return sumDOB;
}
console.log('countDOB', countDOB('12-01-1990'));

//This function will take the result of sumDOB and transfer it into the right result (meaning of the number)
function showBday(sumDOB) {
  // for (var i = 0; i < 22; i++) {
    var resultBday;
    switch (sumDOB) {
      case 1:
        resultBday = "";
        break;
    }
  // }
  return resultBday;
}

// //Thank you Box function appears after submit Comments
// function thankYouBox(){
//   var txt;
//   var confirm;
//   if(confirm("Thank You for giving us your comments!")) {
//     txt = "We appreaciate your time and we love to hear your comments to us!";
//   } else {
//     txt = "We hope you like our game!";
//   }
//   document.getElementById("thankYouBox").innerHTML = txt;
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameCount: 0,
      showResult: '',
      bday: '',
      bdayCount: 0,
      showBdayResult: '',
      comments:[],
      pendingComment: ''
    }
    this.addComment = this.addComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addComment(e){
    this.setState ((oldState) => {
      return {pendingComment: '', comments: [...oldState.comments, oldState.pendingComment]}
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //const commentsRef = firebase.database().ref('user/' + userId + '/comments');
    const commentsRef = firebase.database().ref('comments');
    const comment = {
      comment: this.state.comments
    }
    commentsRef.set(comment);
    this.setState({
      comments: ''
    });
  }

  render() {
    return (
      <div>
        <Primary />
        <h1>NUMEROLOGY GAME</h1>
        <h3>Based on Numerology, Orion Plain and Simple by Anne Christie.</h3>
        <h4><u>Your name number and your compound name number</u></h4>
        <p>According to the numerological theory, you always use the full name on your birth certificate when working out your name number. The number is also changed when women change their name to their husband's family name after they married. Moreover, other changes are a matter of choice, or simply a matter of shortening a name, and some wants to be called by middle name rather than their first name. For example, Mike rather Michael, or Riley Smith rather than Phillip Riley Smith, etc. So begin by using the name on your birth certificate, and then use the name you go by on a day-to-day basic.</p>
          <label for="fname">Full Name/ First Name: </label>
          <input type="text" id="fname" placeholder="Type Your Full Name/ First Name"
            onChange={(e) => { this.setState({ name: e.target.value }) }}/>
          <button onClick={() => {
            const nameCount = count(this.state.name);
            this.setState({ nameCount: nameCount })
            this.setState({ showResult: show(nameCount) })
          }}>Submit</button>
          <p>Your name number is: {this.state.nameCount}</p>
          <p>Your result is: {this.state.showResult}</p>


        <h4><u>Your life path number</u></h4>
        <label for="bday"> Your Date of Birth (DOB): </label>
        <input type="date" id="bday" onChange={(e) => { this.setState({ bday: e.target.value }) }} />
        <button onClick={() => {
          const bdayCount = countDOB(this.state.bday);
          this.setState({ bdayCount: bdayCount })
          this.setState({ showBdayResult: showBday(bdayCount) })
        }}>Submit</button>
        <p>Your DOB number: {this.state.bdayCount}</p>
        <p>Your result is: {this.state.showBdayResult}</p>


       {/* Collect Comments through Firebase */}
       <form onSubmit={this.handleSubmit}>
       <label for="comments">We would love to hear what do you think about our numerology game: </label>
       <input type="textarea" id="comments" placeholder="Please leave us your comments about this numerology game"
       onChange={(e) => this.setState({pendingComment: e.target.value})} value={this.state.pendingComment}/>
       <button onClick={(e) => {
       this.addComment();
      //  this.thankYouBox()
      }}>Submit</button>
      </form>
      {/* {this.state.comments.map(c => <p>{c}</p>)} */}
      {/* <p id="thankYouBox"></p> */}
    </div>
    );
  }
}

export default App;
