import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
// import { GlobalStyles } from "./components/twin/GlobalStyles"
import "tailwindcss/tailwind.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <GlobalStyles /> */}
    <App />
  </React.StrictMode>
)
