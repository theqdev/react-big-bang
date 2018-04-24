import {START_DATA,LOAD_DATA,CHECK_DATA,NEW_DATA,ERROR_DATA,RESET_DATA} from '../constants/exampleTypes';

// Initial State
const initialState = {
  loading: false,
  error: null,
  noteData: {},
  noteExists: true,
};

// Redeucer
export default function noteReducer(state = initialState, action = {}) {
  switch (action.type) {
    case START_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        noteData: action.data,
      };
    case CHECK_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        noteExists: action.data,
      };
    case NEW_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        noteData: action.data,
      };
    case ERROR_DATA:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case RESET_DATA:
      return{
        loading: false,
        state: undefined
      };

  }
  return state;
}
