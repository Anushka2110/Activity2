import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
      <form>
          {/* <label>
            First Name:
            <input type='text' name='fName' placeholder='name' />
          </label>{' '}
          <br />
          <label>
            Last Name:
            <input type='text' name='lName' />
          </label> */}
          <br />
          <label>
            Age
            <input type='number' name='age' placeholder='insert your age'/>
          </label>
          <br />
          <label>
            <input type='radio' value='female' name='gender' id='diet' />
            Female
          </label>
          <label>
            <input type='radio' value='male' name='gender' id='diet' />
            Male
          </label>
          <label>
            <input type='radio' value='prefer not to answer' name='gender' id='diet' />
            Prefer not to answer
          </label>
       
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default App;
