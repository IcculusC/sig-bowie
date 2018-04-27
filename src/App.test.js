import React from 'react';
import renderer from 'react-test-renderer';
import { AppComponent, mapStateToProps } from './App';

describe('app', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<AppComponent list={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('properly renders an album', () => {
    const list = [{
      id: 1,
      name: 'foo',
      releaseDate: 'foo',
      images: [{
        height: 1,
        width: 1,
        url: 'foo',
      }],
      openUrl: 'foo',
    }];
    const tree = renderer.create(<AppComponent list={list} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('maps state to props correctly', () => {
    const state = {
      albums: {
        list: []
      },
    };
    expect(mapStateToProps(state)).toEqual({ list: [] });
  });
});
