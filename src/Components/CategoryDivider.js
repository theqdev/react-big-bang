import React from 'react';
import PropTypes from 'prop-types';

const CategoryDivider = ({ label }) => {
  return (
    <div className="row">
      <div className="col">
        <hr />
      </div>
      <div className="col-auto">{label}</div>
      <div className="col">
        <hr />
      </div>
    </div>
  );
};

CategoryDivider.propTypes = {
  label: PropTypes.string,
};

CategoryDivider.defaultProps = {
  label: 'AND',
};

export default CategoryDivider;
