import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { anecdoteVote } from '../reducers/anecdoteReducer';
import { notificationAddVote } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

function AnecdoteList(props) {
  // const filter = useSelector(state => state.filter);
  // console.log('filter', filter);
  // const anecdotes = useSelector(state => state.anecdotes);
  // const dispatch = useDispatch();

  const vote = anecdote => {
    props.anecdoteVote(anecdote);
    props.notificationAddVote(anecdote.content, 3);
    // dispatch(anecdoteVote(anecdote));
    // dispatch(notificationAddVote(anecdote.content, 3));
  };

  let sortedAnecdotes = props.anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(anecdote => anecdote.content.includes(props.filter.input));
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

const mapDispatchToProps = {
  anecdoteVote,
  notificationAddVote
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  };
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdoteList;
