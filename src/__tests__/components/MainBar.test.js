import React from 'react';
import renderer from 'react-test-renderer';
import MainBar from '../../components/MainBar';

describe('<MainBar /> Component Tests', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<MainBar />).toJSON();
      expect(tree.children.length).toBe(1);
    });

    it('has makeStyles-root-1 as a className', () => {
        const tree = renderer.create(<MainBar />).toJSON();
        expect(tree.props.className).toBe('makeStyles-root-1');
    });

    it('renders correctly', () => {
        const tree = renderer.create(<MainBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});