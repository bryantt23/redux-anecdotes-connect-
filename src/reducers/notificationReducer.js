const initialState = { show: false, message: '' };
console.log(initialState);

export const notificationAddVote = (content, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_VOTE_NOTIFICATION',
      payload: content
    });
    // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout
    setTimeout(() => {
      dispatch(notificationHide());
    }, timeout * 1000);
  };
};

export const notificationAddNote = (content, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_NOTE_NOTIFICATION',
      payload: content
    });
    // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout
    setTimeout(() => {
      dispatch(notificationHide());
    }, timeout * 1000);
  };
};

export const notificationHide = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  };
};

const notificationReducer = (state = initialState, action) => {
  let content, message;

  switch (action.type) {
    case 'ADD_VOTE_NOTIFICATION':
      content = action.payload;
      console.log('content from notification', content);
      message = `You voted for note: ${content}`;
      console.log('message', message);
      return { ...state, show: true, message };
    case 'ADD_NOTE_NOTIFICATION':
      content = action.payload;
      // console.log('content from notification', X);
      message = `You created note: ${content}`;
      return { ...state, show: true, message };
    case 'HIDE_NOTIFICATION':
      return { ...state, message: '', show: false };
    default:
      return state;
  }
};

export default notificationReducer;
