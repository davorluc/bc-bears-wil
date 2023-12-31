import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {MantineProvider} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider withGlobalStyles theme={{
          fontFamily: 'Roboto Condensed, sans-serif'
      }}>
          <App />
      </MantineProvider>
  </React.StrictMode>,
)
