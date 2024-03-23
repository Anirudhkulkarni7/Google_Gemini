// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextprovider from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Contextprovider>
    <App />
  </Contextprovider>,
)
