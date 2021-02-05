const baseUrl = 'http://localhost:3001/anecdotes';

export const getAllAnecdotes = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  return res;
};

const getId = () => (100000 * Math.random()).toFixed(0);

export const createAnecdote = content => {
  return { content, id: getId(), votes: 0 };
};

export const addAnecdote = async anecdote => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(anecdote)
  };
  const response = await fetch(baseUrl, requestOptions);
  const data = await response.json();

  return data;
};

export const voteAnecdote = async anecdote => {
  let updated = { ...anecdote, votes: anecdote.votes + 1 };
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updated)
  };
  const response = await fetch(`${baseUrl}/${anecdote.id}`, requestOptions);
  const data = await response.json();
  // https://stackoverflow.com/questions/38956121/how-to-add-delay-to-promise-inside-then
  // return new Promise(resolve => setTimeout(() => resolve(data), 3333));
  return data;
};
