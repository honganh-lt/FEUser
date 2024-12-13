import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './app/store';
import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Optional: for web vitals (measuring performance)
reportWebVitals();
