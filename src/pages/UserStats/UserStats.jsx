import React, { useEffect } from 'react';
import * as U from './UserStats.styles';
import Container from '@components/@common/Container/Container';
import Loading from '@components/@common/Loading/Loading';
import useTicketTotalQuery from '@hooks/@queries/useTicketTotalQuery';
import StatsBox from '@components/UserStats/StatsBox/StatsBox';
import CoinIconUrl from '@assets/icons/icon-coin.png';
import CalendarIconUrl from '@assets/icons/icon-calendar.png';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

const UserStats = () => {
    const { getTotalCount, getTotalPrice } = useTicketTotalQuery();
    const { data: countData, isLoading: isCountLoading, isError: isCountError, error: countError } = getTotalCount();
    const { data: priceData, isLoading: isPriceLoading, isError: isPriceError, error: priceError } = getTotalPrice();

    const month = new Date().getMonth() + 1;

    useEffect(() => {
        if (!isCountError) return;
        if (isCountError) {
            const errorType = countError?.response?.data?.error?.type;

            switch (errorType) {
                default:
                    toast.show(ERROR_MESSAGE.defaultError);
            }
        }
    }, [isCountError]);

    useEffect(() => {
        if (!isPriceError) return;
        if (isPriceError) {
            const errorType = priceError?.response?.data?.error?.type;

            switch (errorType) {
                default:
                    toast.show(ERROR_MESSAGE.defaultError);
            }
        }
    }, [isPriceError]);
    return (
        <>
            {(isCountLoading || isPriceLoading) && <Loading />}
            <Container>
                <StatsBox title={`${month}월 관람 횟수`} content={`${countData?.total}회`} imgSrc={CalendarIconUrl} />
                <StatsBox
                    title={`${month}월 지출`}
                    content={`${priceData?.totalPrice.toLocaleString()}원`}
                    imgSrc={CoinIconUrl}
                />
            </Container>
        </>
    );
};

export default UserStats;
