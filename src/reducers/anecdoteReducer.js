import {
  getAllAnecdotes,
  voteAnecdote,
  addAnecdote
} from '../services/anecdoteService';
const initialState = [];

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAllAnecdotes();
    dispatch({
      type: 'ANECDOTES_INIT',
      payload: anecdotes
    });
  };
};

export const anecdoteVote = anecdote => {
  return async dispatch => {
    await voteAnecdote(anecdote);
    dispatch({
      type: 'VOTE',
      payload: anecdote.id
    });
  };
};

export const addNote = anecdote => {
  return async dispatch => {
    await addAnecdote(anecdote);
    dispatch({
      type: 'ADD_NOTE',
      payload: anecdote
    });
  };
};

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.payload;
      let index = state.findIndex(elem => elem.id === id);
      let stateCopy = [...state];
      stateCopy[index].votes++;
      return stateCopy;
    case 'ADD_NOTE':
      const anecdote = action.payload;
      const updatedState = state.concat(anecdote);
      return updatedState;
    case 'ANECDOTES_INIT':
      const anecdotes = action.payload;
      return anecdotes;
    default:
      return state;
  }
};

export default anecdoteReducer;
