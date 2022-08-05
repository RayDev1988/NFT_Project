/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';

// const source = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBKrCHuYKL5B_ba1xHkhaRVHMfEqgTxkOw`;

const Document = () => {
  return (
    <Html>
      <Head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKrCHuYKL5B_ba1xHkhaRVHMfEqgTxkOw&libraries=places&v=weekly"
          defer
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
