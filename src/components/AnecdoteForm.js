import React from 'react';
import { addNote } from '../reducers/anecdoteReducer';
import { notificationAddNote } from '../reducers/notificationReducer';
import { createAnecdote } from '../services/anecdoteService';
import { connect } from 'react-redux';

function AnecdoteForm(props) {
  const newNote = e => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    const anecdote = createAnecdote(content);
    props.addNote(anecdote);
    props.notificationAddNote(content, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newNote}>
        <div>
          <input name='note' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = { addNote, notificationAddNote };

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
