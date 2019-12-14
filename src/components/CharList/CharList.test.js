import React from 'react';
import ReactDOM from 'react-dom';
import CharList from './CharList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharList />, div);
  ReactDOM.unmountComponentAtNode(div);
  
});