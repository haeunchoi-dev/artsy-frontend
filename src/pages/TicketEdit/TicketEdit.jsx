import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import * as T from './TicketEdit.styles';
import PhotoUploader from '@components/TicketCreate/PhotoUploader/PhotoUploader';
import Datepicker from '@components/TicketCreate/DatePicker/DatePicker';
import RatingSliderBar from '@components/TicketCreate/RatingSliderBar/RatingSliderBar';
import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import CategoryButton from '@components/TicketCreate/CategoryButton/CategoryButton';
import Loading from '@components/@common/Loading/Loading';
import * as I from '@components/@common/Input/Input.styles';
import deleteIconUrl from '@assets/icons/icon-delete.png';
import formatTicketDate from '@utils/formatTicketDate';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
import { useTicketUpdateQuery } from '@hooks/@queries/useTicketQuery';
import formatKstDate from '@utils/foramtKstDate';
import useToastContext from '@hooks/useToastContext';
import useInput from '@hooks/useInput';

const TicketEdit = () => {
    const theme = useTheme();
    const { ticketId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToastContext();
    const categoryQuery = useCategoryQuery();
    const ticketData = location.state;

    const { mutate, isSuccess, data, isError, error } = useTicketUpdateQuery(parseInt(ticketId));

    const [{ title, place, price, review }, onChangeInput, onNumberChange, inputReset] = useInput({
        title: ticketData.title ?? '',
        place: ticketData.place ?? '',
        price: ticketData.price ?? '',
        review: ticketData.review ?? '',
    });

    const [showDate, setShowDate] = useState(formatKstDate(ticketData.showDate));
    const [rating, setRating] = useState(ticketData.rating);
    const [category, setCategory] = useState(ticketData.categoryId);

    const [imgfile, setImgfile] = useState(''); // 이미지 파일
    const [imgSrc, setImgSrc] = useState(ticketData?.files[0]?.imageUrl ?? ''); // 이미지 미리보기

    const titleRef = useRef();
    const [titleError, setTitleError] = useState('');
    const [titleValid, setTitleValid] = useState(true);

    console.log(ticketData);

    useEffect(() => {
        if (isSuccess) navigate(`/ticket/detail/${parseInt(ticketId)}`, { state: ticketData.updateDate ?? 'new' });
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            const errorType = error.response.data.error.type;

            switch (errorType) {
                case ERROR_TYPE.LIMIT_FILE_SIZE:
                    toast.show(ERROR_MESSAGE.limitFileSize);
                    break;
                case ERROR_TYPE.LIMIT_FILE_COUNT:
                    toast.show(ERROR_MESSAGE.limitFileCount);
                    break;

                case ERROR_TYPE.DISALLOW_FILE_TYPE:
                    toast.show(ERROR_MESSAGE.disallowFileType);
                    break;

                default:
                    toast.show('관리자에게 문의하세요');
            }
        }
    }, [isError]);

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const onResetImage = () => {
        setImgfile('');
        setImgSrc('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (title === '') {
            setTitleError('제목을 입력해주세요');
            setTitleValid(false);
            titleRef.current.focus();
            return;
        }

        // mutate
        let formData = new FormData();

        // 필수
        formData.append('categoryId', parseInt(category));
        formData.append('title', title);
        formData.append('showDate', formatTicketDate(showDate));

        // 선택사항
        formData.append('place', place);
        formData.append('price', price ?? parseInt(price));
        formData.append('rating', parseInt(rating));
        formData.append('review', review);

        // 파일 삭제
        if (imgSrc === '' && ticketData.files.length !== 0) {
            formData.append('removeFileId', ticketData?.files[0]?.id);
        }

        if (imgfile !== '' || imgSrc !== ticketData?.files[0]?.imageUrl) {
            formData.append('file', imgfile);
        }

        mutate(formData);

        inputReset();
        setTitleError('');
    };

    if (categoryQuery.isLoading) return <Loading></Loading>;

    return (
        <T.Container>
            <T.TitleContainer>
                <h3>티켓 수정</h3>
            </T.TitleContainer>
            <T.CreateForm onSubmit={(e) => onSubmit(e)}>
                {imgSrc === '' && <PhotoUploader setImgfile={setImgfile} setImgSrc={setImgSrc} />}
                {imgSrc !== '' && (
                    <T.ImgContainer>
                        <T.ImgWrap>
                            <img alt="티켓 이미지" src={imgSrc} />
                        </T.ImgWrap>
                        <T.IconWrap>
                            <img alt="삭제" src={deleteIconUrl} onClick={onResetImage} />
                        </T.IconWrap>
                    </T.ImgContainer>
                )}
                <T.MarginContainer>
                    <T.StyledInput
                        id="title"
                        labelText="제목"
                        onChange={onChangeInput}
                        value={title}
                        isRequired
                        isValid={titleValid}
                        onBlur={() => {
                            if (title !== '') setTitleValid(true);
                        }}
                        placeholder="제목을 입력하세요"
                        inputWidth="100%"
                        errorMessage={titleError}
                        inputRef={titleRef}
                        maxLength="30"
                    />
                </T.MarginContainer>
                <T.MarginContainer>
                    <T.Label>카테고리</T.Label>
                    <I.StyledRequired>&#42;</I.StyledRequired>
                    <CategoryButton
                        datas={categoryQuery?.data}
                        checkedvalue={parseInt(category)}
                        onChange={onCategoryChange}
                    />
                </T.MarginContainer>
                <T.MarginContainer>
                    <Datepicker
                        selected={showDate}
                        onChange={(date) => setShowDate(date)}
                        customInput={
                            <T.StyledInput
                                id="title"
                                labelText="관람일"
                                isRequired
                                isValid={true}
                                inputWidth="100%"
                                style={{ cursor: 'pointer' }}
                            />
                        }
                    />
                </T.MarginContainer>
                <T.MarginContainer>
                    <T.StyledInput
                        id="place"
                        labelText="장소"
                        onChange={onChangeInput}
                        value={place}
                        isValid={true}
                        placeholder="장소를 입력하세요"
                        inputWidth="100%"
                        maxLength="30"
                    />
                </T.MarginContainer>
                <T.MarginContainer>
                    <T.StyledInput
                        id="price"
                        labelText="금액"
                        onChange={onNumberChange}
                        value={parseInt(price)}
                        inputType="number"
                        isValid={true}
                        placeholder="금액을 입력하세요"
                        inputWidth="100%"
                        maxLength={9}
                    />
                </T.MarginContainer>
                <T.MarginContainer>
                    <T.Label>별점</T.Label>
                    <RatingSliderBar value={rating} onChange={(e) => setRating(e.target.value)} />
                </T.MarginContainer>
                <T.ReviewContainer>
                    <T.Label>리뷰</T.Label>
                    <T.ReviewInput
                        placeholder="리뷰를 입력하세요(1000자)"
                        id="review"
                        onChange={onChangeInput}
                        value={review}
                        maxLength="1000"
                    />
                </T.ReviewContainer>
                <T.ButtonContaienr>
                    <T.CreateButton full="true" size="large" color={theme.colors.point1} onClick={onSubmit}>
                        수정하기
                    </T.CreateButton>
                </T.ButtonContaienr>
            </T.CreateForm>
        </T.Container>
    );
};
export default TicketEdit;
