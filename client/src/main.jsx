import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import authReducer from './state'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {
  persistStore,
  persistReducer,
  FLUSH,  
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
