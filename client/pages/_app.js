import Footer from '@/components/Footer'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { createContext, useEffect, useState } from 'react'
import Notification from '@/components/Notification'


export const NotificationContext = createContext()
export const AuthenticationContext =  createContext()
export default function App({ Component, pageProps }) {
  const [nType, setNType] = useState(null)
  const [nMsg, setNMsg] = useState(null)
  const [AccessToken, setAccessToken] = useState(null)
  const [username, setUsername] = useState(null)
  const renewToken= async()=>{
    const res=await fetch('/auth/renewtoken',{
      method:'POST',
      headers:{'Content-Type':'application/json'}
    })
    const data = await res.json()
    if(!data.status) return 
    setAccessToken(data.AccessToken)
    setUsername(data.username)
  }
  const aState = {AccessToken, setAccessToken, renewToken,username,setUsername}
  const nState = { nType, setNType, nMsg, setNMsg }

  useEffect(()=>{
    renewToken()
  }, [])

  return (
    <AuthenticationContext.Provider value={aState}>
    <NotificationContext.Provider value={nState}>
    <Navbar />
    <Notification />
    <Component {...pageProps} />
    <Footer />
    </NotificationContext.Provider>
    </AuthenticationContext.Provider>
  )
}
