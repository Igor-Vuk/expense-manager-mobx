/* react-test-renderer => it allows us to render our components inside regular javascript code and then we can assert something about what got rendered.  */

import React from 'react'
import Header from '../../components/header'

// React-test-renderer
// --------------------------
// import ReactShallowRenderer from 'react-test-renderer/shallow'
//
// test('should render Header correctly', () => {
//   /* We create a new instance of renderer */
//   const renderer = new ReactShallowRenderer()
//   /* We use render and we define JSX that we wanna render */
//   renderer.render(<Header />)
//   /* We can see rendered output */
//   console.log(renderer.getRenderOutput())
//   /* Jest is gonna create a snapshot of what the rendered header output looked like */
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// })


// Enzyme
// -------------------------------
/* more complex renderer for react is enzyme. To use it with v16 React we need 'enzyme', 'enzyme-adapter-react-16', 'raf'  which is short for request animation frame. We must also make setupTest and jest.config.json file */


import {shallow} from 'enzyme'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
  /* Other examples */
  // expect(wrapper.find('h1').length).toBe(1) 
  // expect(wrapper.find('h1').text()).toBe('Expense Manager') 
})
