## :fist:Practicing JS::fist:
  - [JS Loop For](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).
  - [JS Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch). 
  - [JS Number Methods parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt).
  
 ## :v:React.JS: :v:
  - super(props), 
  - this.state/this.setState, 
  - React Element (JSX).
  
## :bamboo:What I achieved in this program::bamboo:
  - [x] Looping for answers successfully. 
  - [ ] Input requests -> API -> get infos/answers from Database -> send the results back to frontend/browser.
  - [ ] Build this program into an mobile app:iphone:.

## :thumbsup:JS Loop Function example::thumbsup:
```
//This function will make all the DOB number plus together. <br />
//For ex: 12-01-1990 => 1+2+0+1+1+9+9+0= 23 => 2+3=5 <br />
function countDOB(bday) {
  let sumDOB = 0; 
  for (var i = 0; i < bday.length; i++) { 
    const character1 = bday[i]; 
    if (character1 != '-') { 
      sumDOB += parseInt(character1); //get numeric value from the character '1', '2', etc. 
    }
  } 
  return sumDOB; 
} 
```

## :thumbsup:React.JS example::thumbsup:
```
constructor(props) {
    super(props);    
    this.state = {
      bday: '',
      bdayCount: 0,
      showBdayResult: '',
    } 
  } 

  render() {
    return (
      <div>
        <label for="bday"> Your Date of Birth (DOB): </label>
        <input type="date" id="bday" onChange={(e) => { this.setState({ bday: e.target.value }) }} />
        <button onClick={() => { 
          const bdayCount = countDOB(this.state.bday); 
          this.setState({ bdayCount: bdayCount }) 
          this.setState({ showBdayResult: showBday(bdayCount) }) 
        }}>Submit</button>
        <p>Your DOB number: {this.state.bdayCount}</p> 
        <p>Your result is: {this.state.showBdayResult}</p>
      </div>
    ); 
  } 
} 
```

## Make multiple COMMENTS
Using the ideas of buckets of fruit, let's say the the old state was the bucket of apples, which represent comments. The problem is the bucket was made to only hold so many apples. In order to add more apples we need a new bucket. This line [...oldState.comments, oldState.pendingComment] is making a new bucket that holds the old apple bucket plus one more apple.

```
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     comments:[],
     pendingComment: ''
    }
    this.addComment = this.addComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

addComment(e){
    this.setState ((oldState) => {
      return {comments: [...oldState.comments, oldState.pendingComment]}
    });
  }
```

Get available emoji and codes through [this link](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
