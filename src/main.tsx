import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './styles/index.scss'

// Supports weights 100-900
import '@fontsource-variable/roboto-condensed'
import '@fontsource/roboto'
import '@fontsource/bebas-neue'
// Supports weights 300-800
import '@fontsource-variable/open-sans'
// Supports weights 400-700
import '@fontsource-variable/lora'
import '@fontsource/poppins'
// Supports weights 100-900
import '@fontsource-variable/raleway'
// Supports weights 100-900
import '@fontsource-variable/montserrat'
import '@fontsource/ropa-sans'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
