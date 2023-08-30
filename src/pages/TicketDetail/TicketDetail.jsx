import React, { useEffect, useState, useRef } from 'react';
import * as T from './TicketDetail.styles';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import BasicTicketUrl from '@assets/images/ticket.png';
import Loading from '@components/@common/Loading/Loading';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';
import Review from '@components/TicketDetail/Review/Review';
import DetailBox from '@components/TicketDetail/DetailBox/DetailBox';
import useToastContext from '@hooks/useToastContext';
import useHeaderContext from '@hooks/useHeaderContext';
import useTicketQuery from '@hooks/@queries/useTicketQuery';
import compareImage from '@utils/compareImage';
import { useTheme } from 'styled-components';

const TicketDetail = () => {
    const { ticketId } = useParams();
    const location = useLocation();
    const [updateDate, setUpdateDate] = useState(location?.state);
    const navigate = useNavigate();
    const toast = useToastContext();
    const theme = useTheme();
    const { getTicket, deleteTicket } = useTicketQuery();
    const {
        data: ticketData,
        isSuccess: isGetSuccess,
        isError: isGetError,
        isLoading: isGetLoading,
        error: getError,
    } = getTicket(ticketId, updateDate);
    const { setColor } = useHeaderContext();

    const colorBoxRef = useRef();

    const {
        mutate,
        isSuccess: isDeleteSuccess,
        isError: isDeleteError,
        isLoading: isDeleteLoding,
        error: deleteError,
    } = deleteTicket(ticketId);

    const [imgSrc, setImgSrc] = useState('');
    const [imageSize, setImageSize] = useState('height');

    const [position, setPosition] = useState(0);
    const onScroll = () => {
        setPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        if (position > colorBoxRef.current?.offsetHeight) setColor(theme.colors.background1);
        else setColor(ticketData?.categoryColor);

        return () => {
            setColor(theme.colors.background1);
        };
    }, [position]);

    // 티켓 불러오기
    useEffect(() => {
        if (!isGetSuccess) return;
        window.scrollTo(0, 0);
        setColor(ticketData?.categoryColor);

        if (ticketData.files?.length === 0) {
            setImgSrc(BasicTicketUrl);
        } else {
            const { imageUrl, width, height } = ticketData.files[0];
            setImgSrc(imageUrl);
            setImageSize(compareImage(width, height));
        }
    }, [isGetSuccess]);

    useEffect(() => {
        if (!isGetError) return;

        const errorType = getError.response.data.error.type;
        switch (errorType) {
            case ERROR_TYPE.DATA_NOT_FOUND:
                toast.show(ERROR_MESSAGE.dataNotFoundTicket);
                navigate('/ticket/list');
                break;
            default:
                toast.show(ERROR_MESSAGE.defaultError);
        }
    }, [isGetError]);

    // 티켓 삭제
    const onDelete = () => {
        mutate();
    };

    useEffect(() => {
        if (isDeleteSuccess) {
            toast.show(SUCCESS_MESSAGE.successDeleteTicket);
            navigate('/ticket/list');
        }
    }, [isDeleteSuccess]);

    useEffect(() => {
        if (isDeleteError) {
            const errorType = deleteError.response.data.error.type;
            switch (errorType) {
                default:
                    toast.show(ERROR_MESSAGE.defaultError);
            }
        }
    }, [isDeleteError]);

    // 티켓 수정 이동
    const onUpdate = () => {
        navigate(`/ticket/edit/${ticketId}`, { state: ticketData });
    };

    return (
        <>
            {ticketData !== undefined && (
                <div>
                    {isDeleteLoding && <Loading />}
                    {isGetLoading && <Loading />}
                    <T.TypeColorBox ref={colorBoxRef} color={ticketData?.categoryColor} />
                    <T.Container>
                        <T.TicketDetailWrap>
                            <T.TicketImageWrap $size={imageSize}>
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
