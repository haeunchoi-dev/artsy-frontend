import React, { useEffect, useState } from 'react';
import * as T from './TicketDetail.styles';
import { useNavigate, useParams } from 'react-router-dom';
import BasicTicketUrl from '@assets/images/ticket.png';
import { useTicketGetQuery, useTicketDeleteQuery } from '@hooks/@queries/useTicketQuery';
import Loading from '@components/@common/Loading/Loading';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';
import Review from '@components/TicketDetail/Review/Review';
import DetailBox from '@components/TicketDetail/DetailBox/DetailBox';
import useToastContext from '@hooks/useToastContext';

const TicketDetail = () => {
    const { ticketId } = useParams();
    const navigate = useNavigate();
    const toast = useToastContext();
    const ticketGetQuery = useTicketGetQuery(ticketId);
    const ticketData = ticketGetQuery?.data;
    const {
        mutate,
        isSuccess: isDeleteSuccess,
        isError: isDeleteError,
        isLoading: isDeleteLoding,
        error: deleteError,
    } = useTicketDeleteQuery(ticketId);

    const [imgSrc, setImgSrc] = useState('');

    // 티켓 불러오기
    useEffect(() => {
        if (ticketGetQuery.isSuccess) {
            if (ticketData.files?.length === 0) {
                setImgSrc(BasicTicketUrl);
            } else {
                setImgSrc(ticketData.files[0].imageUrl);
            }
        }
    }, [ticketGetQuery.isSuccess]);

    useEffect(() => {
        if (ticketGetQuery.isError) {
            const errorType = ticketGetQuery.error.response.data.error.type;
            switch (errorType) {
                case ERROR_TYPE.DATA_NOT_FOUND: {
                    toast.show(ERROR_MESSAGE.dataNotFoundTicket);
                    navigate('/ticket/list');
                    break;
                }
                default: {
                    toast.show('관리자에게 문의하세요');
                }
            }
        }
    }, [ticketGetQuery.isError]);

    // 티켓 삭제
    const onDelete = () => {
        mutate();
    };

    useEffect(() => {
        if (isDeleteSuccess) {
            toast.show(SUCCESS_MESSAGE.successTicketDelete);
            navigate('/ticket/list');
        }
    }, [isDeleteSuccess]);

    useEffect(() => {
        if (isDeleteError) {
            const errorType = deleteError.response.data.error.type;
            switch (errorType) {
                default: {
                    toast.show('관리자에게 문의하세요');
                }
            }
        }
    }, [isDeleteError]);

    // 티켓 수정 이동
    const onUpdate = () => {
        navigate(`/ticket/edit/${ticketId}`);
    };

    if (ticketGetQuery.isLoading) return <Loading />;
    if (isDeleteLoding) return <Loading />;

    return (
        <>
            {ticketData !== undefined && (
                <div>
                    <T.TypeColorBox color={ticketData?.categoryColor} />
                    <T.Container>
                        <T.TicketDetailWrap>
                            <T.TicketImageWrap>
                                <img src={imgSrc} alt="티켓이미지" />
                            </T.TicketImageWrap>
                            <DetailBox ticketData={ticketData} onUpdate={onUpdate} onDelete={onDelete} />
                        </T.TicketDetailWrap>
                        <Review content={ticketData?.review} />
                    </T.Container>
                </div>
            )}
        </>
    );
};
export default TicketDetail;
