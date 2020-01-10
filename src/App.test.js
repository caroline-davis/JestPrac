import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
// enzyme can do a shallow render -
// a shallow render is a simulated render of a component tree that doesnt require a dom
// it renders only 1 level of components deep and enables the inspection of the components contents
// as well as the simulation of user interaction
import { shallow } from 'enzyme';


describe('App component', () => {
  it('starts with a count of 0', () => {
    // this shallow render of App component is wrapped in a const wrapper
    const wrapper = shallow(<App />);
    // we then grab the test inside the ***<p>***
    const text = wrapper.find('p').text();
    // then we check the text is same as the ***toEqual*** matcher function
    expect(text).toEqual('Count: 0');
  });
  it('increments the count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    // the ***simulate*** function on the button var can simulate a number of DOM events on an element
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    // after the simulated click of the button the text should now if passed - should match the expected ***toEqual('Count: 1')***
    expect(text).toEqual('Count: 1');
  });
});



// ***describe*** function groups related tests inside 1 test suite. 
// takes a 'name' param which describes the component you're testing
// 2nd param is a callback func where individual tests are defined with- ***it***
// ( ***it*** AND ***test*** are the exact same thing.... can use either)
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    // what you want to test is wrapped in ***expect()*** function before calling a 'matcher function')
    // in this example ***toBe()*** is the matcher function
    // it checkes the value provided equals the value that the code within ***expect()*** produces
    expect(2 + 2).toBe(4)
  });
});
