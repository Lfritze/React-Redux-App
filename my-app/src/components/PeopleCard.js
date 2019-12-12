import React, { useEffect } from "react";
import { connect } from "react-redux";
import BasicCard from "./BasicCard";
import { getPeopleData } from "../actions";
import styled from "styled-components";

const PeopleCard = props => {
  useEffect(() => {
    props.getPeopleData();
  }, []);

  if (props.isFetching) {
    return <h3>...loading data</h3>;
  }
  console.log(props);
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.person.map(person => (
        <BasicCard key={person.id} person={person} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getPeopleData })(PeopleCard);

// 'our connected component is using a mapStateToProps function to map pieces of our state tree to this components props
