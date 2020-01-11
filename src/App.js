import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

     <header className="App-header">
    <div>
      <form>
  <h1 align="center">Registration Form</h1>
    Name : <input type="text"></input>
    Email : <input type="text"></input>
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
    </header>  

    </div>
  );
}

export default App;
