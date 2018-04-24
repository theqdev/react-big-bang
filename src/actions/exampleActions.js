import axios from 'axios';
import * as types from '../constants/exampleTypes';
import * as Platform from "../../config/AppConfig";

// Actions
const startData = () => ({
  type: types.START_DATA,
});

const loadData = noteData => ({
  type: types.LOAD_DATA,
  data: noteData,
});

const checkNoteData = noteExists => ({
  type: types.CHECK_DATA,
  data: noteExists,
});

const newNoteData = noteData => ({
  type: types.NEW_DATA,
  data: noteData,
});

const errorData = err => ({
  type: types.LOAD_DATA,
  data: err,
});

const resetData = err => ({
  type: types.RESET_DATA,
  data: err,
});


export function readNote (noteUID) {
  return dispatch => {
    dispatch(startData());
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(data => dispatch(loadData(data.data)))
      .catch(err => dispatch(errorData(err)));
  };
}

export function checkNote (noteUID) {
  return dispatch => {
    dispatch(startData());
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(data => dispatch(checkNoteData(data.data.response)))
      .catch(err => dispatch(errorData(err)));
  };
}

export function newNote (noteText) {
  return dispatch => {
    dispatch(startData());

    let params = new URLSearchParams();
    params.append('noteText', noteText);

    axios
      .post(Platform.settings.APILink+'/newNote', params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }  )
      .then(data => dispatch(newNoteData(data.data)))
      .catch(err => dispatch(errorData(err)));
  };

}

export function resetNoteData(){
  return dispatch => {
    dispatch(resetData());
  };
}
