import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// After
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <PortfolioContainer />
//   </React.StrictMode>
// );