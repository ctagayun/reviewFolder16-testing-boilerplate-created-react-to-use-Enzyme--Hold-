import React from 'react';
import renderer from 'react-test-renderer';

import App, {dataReducer } from './App';
import Counter from './Counter';
import { mount } from 'enzyme';

const list = ['a', 'b', 'c'];

describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
  });

  describe('App', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<App />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();

    });
  });

  describe('Counter', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Counter counter={1} />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

describe('App', () => {
    describe('Reducer', () => {
        it('should set a list', () => {
          const state = { list: [], error: null };
          const newState = dataReducer(state, {
            type: 'SET_LIST',
            list,
        });
        expect(newState).toEqual({ list, error: null });
      });
      it('should reset the error if list is set', () => {
        const state = { list: [], error: true };
        const newState = dataReducer(state, {
          type: 'SET_LIST',
          list,
        });
  
        expect(newState).toEqual({ list, error: null });
      });

      it('should set the error', () => {
        const state = { list: [], error: null };
        const newState = dataReducer(state, {
          type: 'SET_ERROR',
        });
  
        expect(newState.error).toBeTruthy();
      });

      it('renders the inner Counter', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(Counter).length).toEqual(1);
      });

      it('passes all props to Counter', () => {
        const wrapper = mount(<App />);
        const counterWrapper = wrapper.find(Counter);
    
        expect(counterWrapper.find('p').text()).toEqual('0');
      });
    }); //eof describe reducer

  }); //eof describe app


