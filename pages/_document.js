import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossorigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Work+Sans&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body suppressHydrationWarning={true}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
