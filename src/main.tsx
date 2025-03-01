import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setBasePath } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './index.css'
import App from './App.tsx'

const rootElem = document.getElementById('root');

if (rootElem === null) {
  throw new Error('#root not found');
}

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

const root = createRoot(rootElem);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
