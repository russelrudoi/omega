import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={'omega ' + keywords}></meta>
                <title>Omega</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainContainer;
