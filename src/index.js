import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


// Redux part
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './redux/reducers/post';

const store = createStore(
    Reducer,
);

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>    
    </Provider>, 
    document.getElementById('root')
);