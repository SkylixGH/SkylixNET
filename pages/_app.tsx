import Nav from '../components/_app/nav/Nav'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div className={'r__app'}>
      <div className={'r__app_effect'}>
        <div></div>
        <div></div>
      </div>

      <div className={'r__app_root'}>
        <Nav />

        <div className={"r__app_root_body"}>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App;
