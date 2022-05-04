import { Head } from 'next/document'
import Nav from '../components/_app/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />

      <div className={"r_body"}>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}

export default MyApp
