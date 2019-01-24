import React from "react";

function FirstComponent(props) {
  return (
    <ul>
      {props.items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default FirstComponent;
