import React, { useEffect, useState } from 'react';
import * as T from './TicketDetail.styles';
import DetailText from '@components/TicketDetail/DetailText/DetailText';
import { useParams } from 'react-router-dom';
import BasicTicketUrl from '@assets/images/ticket.png';
import { useTicketGetQuery } from '@hooks/@queries/useTicketQuery';
import Loading from '@components/@common/Loading/Loading';
import formatKstDate from '@utils/foramtKstDate';
import formatTicketDate from '@utils/formatTicketDate';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
import Review from '../../components/TicketDetail/Review/Review';

const TicketDetail = () => {
    const { ticketId } = useParams();
    const ticketQuery = useTicketGetQuery(ticketId);
    const ticketData = ticketQuery?.data;

    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        if (ticketQuery.isSuccess) {
            if (ticketData.files?.length === 0) {
                setImgSrc(BasicTicketUrl);
            } else {
                setImgSrc(ticketData.files[0].imageUrl);
            }
        }
    }, [ticketQuery.isSuccess]);

    useEffect(() => {
        if (ticketQuery.isError) {
            const errorType = query.error.response.data.error.type;
            switch (errorType) {
                case ERROR_TYPE.DATA_NOT_FOUND: {
                    alert(ERROR_MESSAGE.dataNotFoundTicket);
                    break;
                }
                default: {
                    alert('관리자에게 문의하세요');
                }
            }
        }
    }, [ticketQuery.isError]);

    const getBlank = (item) => {
        if (item === '') {
            return '-';
        } else return item;
    };

    if (ticketQuery.isLoading) return <Loading />;
    return (
        <>
            <T.TypeColorBox color={ticketData.categoryColor} />
            <T.Container>
                <T.TicketDetailWrap>
                    <T.TicketImageWrap>
                        <img src={imgSrc} alt="티켓이미지" />
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
                                <DetailText label="장소" content={getBlank(ticketData.place)} />
                                <DetailText
                                    label="금액"
                                    content={ticketData.price === 0 ? '-' : `${ticketData.price.toLocaleString()}원`}
                                />
                                <DetailText
                                    label="일시"
                                    content={formatTicketDate(formatKstDate(ticketData.showDate))}
                                />
                                <DetailText label="리뷰" review={true} content={getBlank(ticketData.review)} />
                            </T.DetailWrap>
                            <T.EditWrap>
                                <span>수정하기</span>
                                <span>|</span>
                                <span>삭제하기</span>
                            </T.EditWrap>
                        </T.DetailContainer>
                    </T.TicketDetailBox>
                </T.TicketDetailWrap>
                <Review content={ticketData.review} />
            </T.Container>
        </>
    );
};
export default TicketDetail;
