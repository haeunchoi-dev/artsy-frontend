import { Outlet } from 'react-router-dom';
import Layout from '@components/Layout/Layout.jsx';
import Header from '@components/Header/Header.jsx';
import Main from '@components/Main/Main.jsx';
import Footer from '@components/Footer/Footer.jsx';
import GlobalStyle from '@styles/GlobalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Layout>
        </>
    );
};

export default App;
