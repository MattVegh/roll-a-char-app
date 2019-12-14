import React from 'react';
import ReactDOM from 'react-dom';
import CharInputs from './CharInputs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharInputs />, div);
  ReactDOM.unmountComponentAtNode(div);
  
});