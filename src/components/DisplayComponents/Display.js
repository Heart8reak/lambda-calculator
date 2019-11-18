import React from "react";

const Display = (props) => {

  console.log("Display", props, props.number)

  return <div className="display">{/* Display any props data here */}
    {props.value}
  </div>;
};


export default Display;