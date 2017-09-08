import React from 'react';
import Types from 'prop-types';

const Radio = ({ disabled, name, checked, onChange }) => {
  const handleClick = () => !disabled && onChange(!checked);
  const buttonClass = `tw-radio-button ${checked ? 'checked' : ''}`;
  return (
    <div >
      <input
        type="radio"
        className="sr-only"
        name={name}
        value={checked}
        onChange={handleClick}
        disabled={disabled}
      />
      <button
        type="button"
        className={buttonClass}
        onClick={handleClick}
        disabled={disabled}
        aria-pressed={checked}
      >
        <span className="tw-radio-check" />
      </button>
    </div>
  );
};

Radio.propTypes = {
  name: Types.string.isRequired,
  onChange: Types.func.isRequired,
  checked: Types.bool,
  disabled: Types.bool,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
};

export default Radio;
