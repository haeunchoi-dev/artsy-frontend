import { useMemo } from 'react';

import Container from '@components/@common/Container/Container.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';
import MyGreeting from '@components/MyPage/MyGreeting/MyGreeting.jsx';
import MyIconMenu from '@components/MyPage/MyIconMenu/MyIconMenu.jsx';
import MyExpense from '@components/MyPage/MyExpense/MyExpense.jsx';
import GradeBox from '@components/MyPage/GradeBox/GradeBox.jsx';

import useUserInfoQuery from '@hooks/@queries/useUserInfoQuery';
import useTotalPriceQuery from '@hooks/@queries/useTotalPriceQuery';

import calculateGrade from '@utils/calculateGrade';
import calculateNextGrade from '@utils/calculateNextGrade';

import * as M from './MyPage.styles';

const MyPage = () => {
    const userInfoQuery = useUserInfoQuery();
    const totalPriceQuery = useTotalPriceQuery();
    const gradeInfo = useMemo(() => {
        if (userInfoQuery.isSuccess) return calculateGrade(userInfoQuery?.data?.totalTicket);
    }, [userInfoQuery]);

    const gradeNextInfo = useMemo(() => {
        if (userInfoQuery.isSuccess) return calculateNextGrade(gradeInfo.name);
    }, [userInfoQuery]);

    if (userInfoQuery.isLoading || totalPriceQuery.isLoading) return <Loading />;

    return (
        <>
            <Container>
                <M.MyPage>
                    <M.ViewWrap>
                        <MyGreeting username={userInfoQuery?.data?.displayName} />
                        <MyIconMenu />
                        <GradeBox userInfo={userInfoQuery?.data} gradeInfo={gradeInfo} gradeNextInfo={gradeNextInfo} />
                    </M.ViewWrap>
                    <M.DataWrap>
                        <MyExpense totalPrice={totalPriceQuery?.data?.totalPrice.toLocaleString()} />
                    </M.DataWrap>
                </M.MyPage>
            </Container>
        </>
    );
};
export default MyPage;
