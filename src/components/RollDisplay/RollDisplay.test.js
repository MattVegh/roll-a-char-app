import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App'
import RollDisplay from './RollDisplay';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <App >
            <RollDisplay />
        </App>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    
});