import React from 'react';
import renderer from 'react-test-renderer';
import { BlackstarIcon, Header } from './Header';


describe('Header component', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Blackstar icon properly', () => {
    const tree = renderer.create(<BlackstarIcon  viewBox='0 0 260 260' nativeColor='#000' />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
