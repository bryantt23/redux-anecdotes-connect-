import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { anecdoteVote } from '../reducers/anecdoteReducer';
import {
  notificationAddVote,
  notificationHide
} from '../reducers/notificationReducer';

function AnecdoteList() {
  const filter = useSelector(state => state.filter);
  console.log('filter', filter);
  const anecdotes = useSelector(state => state.anecdotes);
  const dispatch = useDispatch();

  const vote = anecdote => {
    dispatch(anecdoteVote(anecdote));
    dispatch(notificationAddVote(anecdote.content, 3));
  };

  let sortedAnecdotes = anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(anecdote => anecdote.content.includes(filter.input));
  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnecdoteList;
