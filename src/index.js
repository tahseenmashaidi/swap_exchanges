import React from 'react';
import ReactDOM from 'react-dom';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import { BrowserRouter  } from 'react-router-dom'
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  ,document.getElementById('root')
);

