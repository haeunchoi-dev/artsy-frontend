import { Outlet } from 'react-router-dom';
import Layout from '@components/@common/Layout/Layout.jsx';
import Header from '@components/@common/Header/Header.jsx';
import Main from '@components/@common/Main/Main.jsx';
import Footer from '@components/@common/Footer/Footer.jsx';
import GlobalStyle from '@styles/GlobalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Header />
                <Main>
                    <p>normal</p>
                    <p style={{ fontWeight: '500' }}>medium</p>

                    <p style={{ fontWeight: 'bold' }}>bold</p>
                    <Outlet />
                </Main>
                <Footer />
            </Layout>
        </>
    );
};

export default App;
