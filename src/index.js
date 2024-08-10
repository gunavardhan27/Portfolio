import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import HomeScreen from './homescreen/HomeScreen';
//import { Router } from 'react-router-dom';
//import { Provider } from 'react-redux';
import store from './store/Mode';
import { Provider } from 'react-redux';
import Skills from './components/Skills';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/Skills',
    element:<Skills />
  }
])

root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
