import React, { useState } from 'react';
import * as T from './TicketDetail.styles';
import DetailText from '../../components/TicketDetail/DetailText';

const TicketDetail = () => {
    const imgUrl =
        'https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp';

    const ticketData = {
        category: '영화',
        title: '영화 제목',
        showDate: '2023년 08월 11일',
        rating: '4',
        location: '서울특별시 강남구 강남대로 438',
        price: 12000,
    };

    return (
        <T.Container>
            <T.MainText>티켓 상세</T.MainText>
            <T.TypeColorBox />
            <T.TicketDetailContainer>
                <T.TicketImage src={imgUrl} />
                <T.TicketDetailBox>
                    <DetailText label="카테고리" content={ticketData.category} />
                    <DetailText label="관람일" content={ticketData.showDate} />
                    <DetailText label="장소" content={ticketData.location} />
                    <DetailText label="금액" content={`${ticketData.price.toLocaleString()}원`} />
                </T.TicketDetailBox>
            </T.TicketDetailContainer>
        </T.Container>
    );
};
export default TicketDetail;
