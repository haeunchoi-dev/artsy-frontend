import { Outlet } from 'react-router-dom';
import Layout from '@components/@common/Layout/Layout.jsx';
import Header from '@components/@common/Header/Header.jsx';
import Main from '@components/@common/Main/Main.jsx';
import Footer from '@components/@common/Footer/Footer.jsx';

const App = () => {
    return (
        <Layout>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Layout>
    );
};

export default App;
