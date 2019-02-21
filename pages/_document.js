import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        </Head>
        <body style={{height: '100%', backgroundColor: '#262626', margin: '0'}}>
          <div id="portal"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
