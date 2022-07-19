import Layout from '../components/Layout'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
