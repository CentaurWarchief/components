import React from 'react';
import Types from 'prop-types';
import Radio from '../radio';

const LabledRadio = ({ label, disabled, name, checked, onChange }) =>
  (
    <div className="radio">
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>
        {/* eslint-enable jsx-a11y/label-has-for */}
        <Radio
          name={name}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );

LabledRadio.propTypes = {
  label: Types.string.isRequired,
  name: Types.string.isRequired,
  onChange: Types.func.isRequired,
  checked: Types.bool,
  disabled: Types.bool,
};

LabledRadio.defaultProps = {
  checked: false,
  disabled: false,
};

export default LabledRadio;
