import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Intro from '@pages/Intro/Intro.jsx';
import Home from '@pages/Home/Home.jsx';
import MyPage from '@pages/MyPage/MyPage.jsx';
import UserEdit from '@pages/UserEdit/UserEdit.jsx';
import TicketList from '@pages/TicketList/TicketList.jsx';
import TicketCreate from '@pages/TicketCreate/TicketCreate.jsx';
import TicketDetail from '@pages/TicketDetail/TicketDetail.jsx';
import TicketEdit from '@pages/TicketEdit/TicketEdit.jsx';
import PageNotFound from '@pages/PageNotFound/PageNotFound.jsx';
import Signin from '@pages/Signin/Signin.jsx';
import Register from '@pages/Register/Register.jsx';
import PageGuard from '@pages/PageGuard/PageGuard.jsx';
import Grade from '@pages/Grade/Grade.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Intro />,
            },
            {
                element: <PageGuard />,
                children: [
                    {
                        path: 'home',
                        element: <Home />,
                    },
                    {
                        path: 'mypage',
                        element: <MyPage />,
                    },
                    {
                        path: 'user/edit',
                        element: <UserEdit />,
                    },
                    {
                        path: 'ticket/list',
                        element: <TicketList />,
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
                        path: 'grade',
                        element: <Grade />,
                    },
                ],
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
