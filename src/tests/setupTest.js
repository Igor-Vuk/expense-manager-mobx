/* Here we configure our test environment */

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* We configure enzyme to work with adapter */
Enzyme.configure({
  adapter: new Adapter()
})


// next we make jest.config.json file. This file should be in the root of our project.
//---------
// setupFiles is option inside Jest that let us setup an array of paths. Paths to files that Jest runs before it runs test.
// the first file is request animation frame
// the second file is our 'setupTest' file. When we are adding files to 'jest.config', files that are in our project(not in node modules) we start with '<rootDir>' that goes from root of the project.
// ---------------
// under 'snapshotSerializers' property, inside array we add 'enzyme-to-json/serializer'
// to make enzyme work with snapshot functionality we need to install 'enzyme-to-json' package
// it is gonna take the wrapper, extract just necessary stuff for rendered output. Before we did this, besides our snapshot there was other code inside our file related to enzyme settings 
// at the end we need to setup our package.json test script to load jest.config.json file "test-watch": "jest --config=jest.config.json --watch" 