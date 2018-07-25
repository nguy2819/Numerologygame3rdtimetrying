### Practicing JS:
  - JS Loop For,
  - JS Switch, 
  - JS Number Methods parseInt().
  
 ### React.JS: 
  - super(props), 
  - this.state/this.setState, 
  - React Element (JSX).

### JS Loop Function example: 
//This function will make all the DOB number plus together. <br />
//For ex: 12-01-1990 => 1+2+0+1+1+9+9+0= 23 => 2+3=5 <br />
function countDOB(bday) { <br />
  let sumDOB = 0; <br />
  for (var i = 0; i < bday.length; i++) { <br />
    const character1 = bday[i]; <br />
    if (character1 != '-') { <br />
      sumDOB += parseInt(character1); //get numeric value from the character '1', '2', etc. <br />
    } <br />
  } <br />
  return sumDOB; <br />
} <br />

### React.JS example:

constructor(props) {
<br />
    super(props);
    <br />
    this.state = {<br />
      bday: '',<br />
      bdayCount: 0,<br />
      showBdayResult: '',<br />
    } <br />
  } <br />

  render() {<br />
    return (<br />
      <div><br />
        <label for="bday"> Your Date of Birth (DOB): </label><br />
        <input type="date" id="bday" onChange={(e) => { this.setState({ bday: e.target.value }) }} />
        <button onClick={() => { <br />
          const bdayCount = countDOB(this.state.bday); <br />
          this.setState({ bdayCount: bdayCount }) <br />
          this.setState({ showBdayResult: showBday(bdayCount) }) <br />
        }}>Submit</button> <br />
        <p>Your DOB number: {this.state.bdayCount}</p> <br />
        <p>Your result is: {this.state.showBdayResult}</p> <br />
      </div> <br />
    ); <br />
  } <br />
} <br />
