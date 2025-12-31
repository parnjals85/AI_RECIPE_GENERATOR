import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from '@clerk/clerk-react'
import {Auth0Provider} from '@auth0/auth0-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
 
     <Auth0Provider
      domain="dev-tru5d7vy86r5b8w3.us.auth0.com"
      clientId="pO8UH4IXgSVsNjRUmfyVNBhd6c48b6ls"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
    </ClerkProvider>
    </Auth0Provider>
 
)
