import React from 'react';
import { anecdoteVote } from '../reducers/anecdoteReducer';
import { notificationAddVote } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

function AnecdoteList(props) {
  const vote = anecdote => {
    props.anecdoteVote(anecdote);
    props.notificationAddVote(anecdote.content, 5);
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
