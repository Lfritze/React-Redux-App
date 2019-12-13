import React from "react";
import styled from "styled-components";

const CardHolder = styled.div`
  background: #91bfe8;
  margin-top: 1%;
  margin-bottom: 1%;
  border: 2px solid black;
  width: 15%;
  border-radius: 20px;
`;

const Picture = styled.img`
  border-radius: 10px;
  margin-bottom: 2%;
`;

const BasicCard = props => {
  return (
    <CardHolder key={props.person.id}>
      <h2>{`${props.person.nameTitle} ${props.person.firstName} ${props.person.lastName}`}</h2>
      <Picture src={props.person.image} />
    </CardHolder>
  );
};

export default BasicCard;
