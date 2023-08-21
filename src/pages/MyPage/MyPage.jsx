import { useMemo } from 'react';

import Container from '@components/@common/Container/Container.jsx';
import GradeBar from '@components/@common/GradeBar/GradeBar.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';
import MyGreeting from '@components/MyPage/MyGreeting/MyGreeting.jsx';
import MyIconMenu from '@components/MyPage/MyIconMenu/MyIconMenu.jsx';
import MyExpense from '@components/MyPage/MyExpense/MyExpense.jsx';

import useUserInfoQuery from '@hooks/@queries/useUserInfoQuery';
import useTotalPriceQuery from '@hooks/@queries/useTotalPriceQuery';

import calculateGrade from '@utils/calculateGrade';
import calculateNextGrade from '@utils/calculateNextGrade';

import { getIconUrl } from '@utils/getImageUrl';

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
                        <M.GradeBox>
                            <M.GradeBoxTop to="">
                                <span>
                                    <img src={getIconUrl(`badge_${gradeInfo?.imageName}`)} alt={gradeInfo?.name} />
                                </span>
                                <h4>{gradeInfo?.name}</h4>
                                {gradeNextInfo?.isNext === false ? (
                                    <p>
                                        {gradeNextInfo?.nextGrade?.name}까지{' '}
                                        {gradeInfo?.targetValue - userInfoQuery?.data?.totalTicket}
                                        개의 티켓이 필요해요!
                                    </p>
                                ) : (
                                    <p>{userInfoQuery?.data?.displayName}님은 문화를 사랑하는 아티 마스터!</p>
                                )}
                            </M.GradeBoxTop>
                            <GradeBar total={userInfoQuery?.data?.totalTicket} height={0.8} />
                        </M.GradeBox>
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
