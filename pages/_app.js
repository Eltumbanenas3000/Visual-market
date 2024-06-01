import "@/styles/globals.css";
import {Toaster} from 'react-hot-toast'
import { SessionProvider } from "next-auth/react"
import Spline from '@splinetool/react-spline';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

<Toaster position="top-center"/>