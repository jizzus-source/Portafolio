import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // tslint:disable-next-line:function-name
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // TODO figure out proper type signature
          // tslint:disable-next-line:typedef
          enhanceApp: (AppComponent) => (props) => sheet.collectStyles(<AppComponent {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <div key={0}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render(){
    return (
      <Html>
        <Head>
          <title>Jesus Pareja</title>
          <link rel="shortcut icon" href="/icons/logo.png" />
            
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
