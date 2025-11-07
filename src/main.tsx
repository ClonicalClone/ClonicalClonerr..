import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.tsx'
import { Bounce, ToastContainer } from 'react-toastify'


// Use your Clerk frontend API key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

      <BrowserRouter>
        <App />
        <ToastContainer position="bottom-left" toastClassName="" style={{ zIndex: 9999 }} theme="dark"
transition={Bounce}/>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
