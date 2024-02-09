import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap5/src/css/bootstrap.min.css';
import store from './store'
import Todo from './ToDo/Todo'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <Todo/>
    </Provider>
  </React.StrictMode>,
)
