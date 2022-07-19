import Layout from '../components/Layout'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </Provider>
  )
}

export default MyApp
