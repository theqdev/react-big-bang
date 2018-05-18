import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  postsGet: null,
  postsSuccess: ['data'],
  postsFailure: null,
})

export const PostsActions = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const get = (state, { data }) =>
  state.merge({ fetching: true, data })

// successful api lookup
export const success = (state, { data }) =>
  state.merge({ fetching: false, error: null, data:data })

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const Posts = createReducer(INITIAL_STATE, {
  [Types.POSTS_GET]: get,
  [Types.POSTS_SUCCESS]: success,
  [Types.POSTS_FAILURE]: failure,
})
