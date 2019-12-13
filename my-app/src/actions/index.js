import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getPeopleData = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
    .get("https://n161.tech/api/dummyapi/user")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
};

// NOTES NOTES NOTES ****
// Actions in Redux are packets of information that describe events that have occurred in the UI

// In code, an action is simply an object

// actions are dispatched to the reducers, and tell the reducers how to update the state tree

// REDUX DATA FLOW **********
// A. Store sets the state
// B. Event occurs in the UI
// C. An Action that describes the event is dispatched
// D. The reducer updates the state tree in a predictable way
// E. The UI receives the updated state tree

// DATA in API
// {"data":[{"id":1,"nameTitle":"mr","firstName":"Kaya","lastName":"Aksit","image":"https://randomuser.me/api/portraits/men/53.jpg"}
