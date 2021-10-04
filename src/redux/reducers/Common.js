import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS
} from "../../@jumbo/constants/ActionTypes";

const INIT_STATE = {
  initialURL: "/",
  error: "",
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...state, error: "", loading: true};
    }
    case FETCH_SUCCESS: {
      return {...state, error: "", loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default:
      return state;
  }
};
