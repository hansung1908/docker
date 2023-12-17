import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.html에 있는 root라는 id를 찾아서 렌더
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // app.js에서 return 값이 여기로
  <App/>
);
