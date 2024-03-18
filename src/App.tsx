import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => (
  <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
