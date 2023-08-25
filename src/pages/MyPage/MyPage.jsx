import { useMemo } from 'react';

import Container from '@components/@common/Container/Container.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';
import MyGreeting from '@components/MyPage/MyGreeting/MyGreeting.jsx';
import MyIconMenu from '@components/MyPage/MyIconMenu/MyIconMenu.jsx';
import MyExpense from '@components/MyPage/MyExpense/MyExpense.jsx';
import GradeBox from '@components/MyPage/GradeBox/GradeBox.jsx';

import { useUserGetQuery } from '@hooks/@queries/useUserInfoQuery';
import useTotalPriceQuery from '@hooks/@queries/useTotalPriceQuery';

import calculateGrade from '@utils/calculateGrade';
import calculateNextGrade from '@utils/calculateNextGrade';

import * as M from './MyPage.styles';

const MyPage = () => {
    const { data: userInfo, isSuccess: isSuccessUser, isLoading: isLoadingUser } = useUserGetQuery();
    const { data: totalPrice, isLoading: isLoadingTotalPrice } = useTotalPriceQuery();
    const gradeInfo = useMemo(() => {
        if (isSuccessUser) return calculateGrade(userInfo?.totalTicket);
    }, [userInfo]);

    const gradeNextInfo = useMemo(() => {
        if (isSuccessUser) return calculateNextGrade(gradeInfo.name);
    }, [userInfo]);

    if (isLoadingUser || isLoadingTotalPrice) return <Loading />;

    return (
        <>
            <Container>
                <M.MyPage>
                    <M.ViewWrap>
                        <MyGreeting username={userInfo?.displayName} />
                        <MyIconMenu />
                        <GradeBox userInfo={userInfo} gradeInfo={gradeInfo} gradeNextInfo={gradeNextInfo} />
                    </M.ViewWrap>
                    <M.DataWrap>
                        <MyExpense totalPrice={totalPrice?.totalPrice?.toLocaleString() ?? '0'} />
                    </M.DataWrap>
                </M.MyPage>
            </Container>
        </>
    );
};
export default MyPage;
