import Document, { Html, Head, Main, NextScript } from 'next/document'

import Footer from '../components/footer'

import Header from '../components/header'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
          <main className='max-w-3xl mx-auto'>
            <Header />
            <Main />
          </main>
          <Footer />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument

