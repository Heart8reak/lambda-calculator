import React, { useState } from "react";

//import any components needed
import NumberButton from "../NumberButtons/NumberButton";

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers } from "../../../data";



const Numbers = (props) => {
  const [numberState] = useState(numbers);
  console.log('Numbers', props);

  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((num, index) => (
        <NumberButton key={index} number={num} />
      ))
      }
    </div>
  );
};

export default Numbers;
