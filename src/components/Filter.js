import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const input = event.target.value;
    console.log(input);
    dispatch(updateFilter(input));
    // input-field value is in variable event.target.value
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
