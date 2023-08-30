import { useMemo } from 'react';

import Wrap from '@components/@common/Wrap/Wrap.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';
import MyGreeting from '@components/MyPage/MyGreeting/MyGreeting.jsx';
import MyIconMenu from '@components/MyPage/MyIconMenu/MyIconMenu.jsx';
import MyExpense from '@components/MyPage/MyExpense/MyExpense.jsx';
import GradeBox from '@components/MyPage/GradeBox/GradeBox.jsx';
import PercentBox from '@components/MyPage/PercentBox/PercentBox.jsx';

import { getUser } from '@hooks/@queries/useUserInfoQuery';
import useTotalPriceQuery from '@hooks/@queries/useTotalPriceQuery';
import useUserPercentQuery from '@hooks/@queries/useUserPercentQuery';

import { calculateGrade, calculateNextGrade } from '@utils/calculateGrade';

import * as M from './MyPage.styles';

const MyPage = () => {
    const { data: userInfo, isSuccess: isSuccessUser, isLoading: isLoadingUser } = getUser();
    const { data: totalPrice, isLoading: isLoadingTotalPrice } = useTotalPriceQuery();
    const { data: percentageInfo, isLoading: isLoadingPercent } = useUserPercentQuery();
    const gradeInfo = useMemo(() => {
        if (isSuccessUser) return calculateGrade(userInfo?.totalTicket);
    }, [userInfo]);

    const gradeNextInfo = useMemo(() => {
        if (isSuccessUser) return calculateNextGrade(gradeInfo.name);
    }, [userInfo]);

    if (isLoadingUser || isLoadingTotalPrice || isLoadingPercent) return <Loading />;

    return (
        <Wrap>
            <M.ViewWrap>
                <MyGreeting username={userInfo?.displayName} />
                <MyIconMenu />
                <GradeBox userInfo={userInfo} gradeInfo={gradeInfo} gradeNextInfo={gradeNextInfo} />
            </M.ViewWrap>
            <M.DataWrap>
                <MyExpense totalPrice={totalPrice?.totalPrice?.toLocaleString() ?? '0'} />
                <PercentBox username={userInfo?.displayName ?? ''} percentage={percentageInfo?.percentage ?? '0'} />
            </M.DataWrap>
        </Wrap>
    );
};
export default MyPage;
