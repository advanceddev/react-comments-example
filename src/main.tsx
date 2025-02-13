import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElem = document.getElementById('root');

if (rootElem === null) {
  throw new Error('#root not found');
}

const root = createRoot(rootElem);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
