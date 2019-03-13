import React from 'react';
import { Counter } from './Counter';
import { mount, shallow } from 'enzyme';

const setup = (props, takeScreenshot = false, renderMethod = shallow) => {
  const wrapper = renderMethod(<Counter {...props}/>);

  if (takeScreenshot) {
    expect(wrapper).toMatchSnapshot();
  }

  return wrapper;
};

describe('Counter', () => {
  it('should render the default view : Counter + 2 buttons', () => {
    setup(null, true);
  });

  it('should accept default value override', () => {
    setup({ defaultValue: 1 }, true);
  });

  it('should decrement value when a click on - button is triggered', () => {
    const wrapper = setup(null, false, mount);
    wrapper.find('.btn-decrement').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should increment value when a click on + button is triggered', () => {
    const wrapper = setup(null, false, mount);
    wrapper.find('.btn-increment').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
