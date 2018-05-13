import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  exampleSet: ['data'],
  exampleSuccess: null,
  exampleFailure: null,
})

export const ExampleActions = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  test: 'kex',
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const set = (state, { data }) =>
  state.merge({ fetching: true, data })

// successful api lookup
export const success = state =>
  state.merge({ fetching: false, error: null })

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const example = createReducer(INITIAL_STATE, {
  [Types.EXAMPLE_SET]: set,
  [Types.EXAMPLE_SUCCESS]: success,
  [Types.EXAMPLE_FAILURE]: failure,
})
