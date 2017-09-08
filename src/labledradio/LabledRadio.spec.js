import React from 'react';
import { shallow } from 'enzyme';

import LabledRadio from './';

describe('LabledRadio', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      label: 'hello, i am a radio',
      name: 'radio name',
      onChange: jest.fn(),
      checked: false,
      disabled: false,
    };
    component = shallow(<LabledRadio {...props} />);
  });

  it('displays the given label', () => {
    expect(component.text()).toEqual(props.label);
  });

  it('displays the Radio component', () => {
    expect(component.find('input[type="radio"]')).toBeTruthy();
  });
});
