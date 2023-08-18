import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Intro from '@pages/Intro/Intro.jsx';
import Home from '@pages/Home/Home.jsx';
import MyPage from '@pages/MyPage/MyPage.jsx';
import List from '@pages/List/List.jsx';
import TicketCreate from '@pages/TicketCreate/TicketCreate.jsx';
import TicketDetail from '@pages/TicketDetail/TicketDetail.jsx';
import TicketEdit from '@pages/TicketEdit/TicketEdit.jsx';
import PageNotFound from '@pages/PageNotFound/PageNotFound.jsx';
import Signin from '@pages/Signin/Signin.jsx';
import Register from '@pages/Register/Register.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // intro, home path 나중에 수정 필요
            {
                path: 'intro',
                element: <Intro />,
            },
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'mypage',
                element: <MyPage />,
            },
            {
                path: 'ticket/list',
                element: <List />,
            },
            {
                path: 'ticket/create',
                element: <TicketCreate />,
            },
            {
                path: 'ticket/detail/:ticketId',
                element: <TicketDetail />,
            },
            {
                path: 'ticket/edit/:ticketId',
                element: <TicketEdit />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
    {
        path: '/signin',
        element: <Signin />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default router;
