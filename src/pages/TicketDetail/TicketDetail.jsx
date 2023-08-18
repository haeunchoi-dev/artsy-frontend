import React, { useState } from 'react';
import * as T from './TicketDetail.styles';
import DetailText from '../../components/TicketDetail/DetailText';
import { useParams } from 'react-router-dom';

const TicketDetail = () => {
    const { ticketId } = useParams();

    const imgUrl =
        'https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp';

    const ticketData = {
        categoryName: '영화',
        title: '엘리멘탈',
        showDate: '2023-08-14',
        rating: '4',
        place: '성수 메가박스',
        price: 12000,
        review: '오늘 영화 봄',
        categoryColor: '#A888FF',
    };

    return (
        <>
            <T.TypeColorBox color={ticketData.categoryColor} />
            <T.Container>
                <T.MainWrap>
                    <h2>티켓 상세</h2>
                </T.MainWrap>
                <T.TicketDetailWrap>
                    <T.TicketImageWrap>
                        <img src={imgUrl} alt="티켓이미지" />
                    </T.TicketImageWrap>
                    <T.TicketDetailBox>
                        <T.DetailContainer>
                            <T.TitleWrap>
                                <h3>{ticketData.title}</h3>
                            </T.TitleWrap>
                            <T.UnderLine />
                            <T.DetailWrap>
                                <DetailText label="카테고리" content={ticketData.categoryName} />
                                <DetailText label="별점" rating={ticketData.rating} />
                                <DetailText label="장소" content={ticketData.place} />
                                <DetailText label="금액" content={`${ticketData.price.toLocaleString()}원`} />
                                <DetailText label="일시" content={ticketData.showDate} />
                                <DetailText label="리뷰" content={ticketData.review} />
                            </T.DetailWrap>
                            <T.EditWrap>
                                <span>수정하기</span>
                                <span>|</span>
                                <span>삭제하기</span>
                            </T.EditWrap>
                        </T.DetailContainer>
                    </T.TicketDetailBox>
                </T.TicketDetailWrap>
            </T.Container>
        </>
    );
};
export default TicketDetail;
