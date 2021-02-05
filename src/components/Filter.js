import React from 'react';
import { updateFilter } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = props => {
  const handleChange = event => {
    const input = event.target.value;
    console.log(input);
    props.updateFilter(input);
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

const mapDispatchToProps = {
  updateFilter
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
