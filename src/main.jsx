import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { JobsProvider } from './context/JobsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobsProvider>
      <App />
    </JobsProvider>
  </React.StrictMode>,
)
