import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';//o App esta dentro da pasta components
import App2 from './components/App2';//o Ap2 esta dentro da pasta components
import App3 from './components/App3';//o Ap3 esta dentro da pasta components
import App4 from './components/App4';//o Ap3 esta dentro da pasta components

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title="Titulo">
     Conteudo1
      </App>

<App2 title="Titulo">
Conteudo2
 </App2>

<App3 title="Titulo">
Conteudo3
 </App3>
 <App4 title="Titulo">
Conteudo4
 </App4>

  </React.StrictMode>
);
reportWebVitals();
