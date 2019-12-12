import React from "react";

const BasicCard = props => {
  return (
    <div key={props.person.id}>
      <h2>{`${props.person.nameTitle} ${props.person.firstName} ${props.person.lastName}`}</h2>
    </div>
  );
};

export default BasicCard;
