import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as T from './TicketCreate.styles';
import PhotoUploader from '@components/TicketCreate/PhotoUploader/PhotoUploader';
import Datepicker from '@components/TicketCreate/DatePicker/DatePicker';
import RatingSliderBar from '@components/TicketCreate/RatingSliderBar/RatingSliderBar';
import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import CategoryButton from '@components/TicketCreate/CategoryButton/CategoryButton';
import Loading from '@components/@common/Loading/Loading';
import * as I from '@components/@common/Input/Input.styles';
import deleteIconUrl from '@assets/icons/icon-delete.png';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';
import useInput from '@hooks/useInput';
import useToastContext from '@hooks/useToastContext';
import Input from '@components/@common/Input/Input';
import useTicketQuery from '@hooks/@queries/useTicketQuery';
import { formatTicketDate, formatTenMinutes } from '@utils/formatDate';
import setFormData from '@utils/setFormData';

const TicketCreate = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const categoryQuery = useCategoryQuery();
    const [searchParams, setSearchParams] = useSearchParams();
    const toast = useToastContext();
    const categoryId = searchParams.get('categoryId');

    const { createTicket } = useTicketQuery();
    const { mutate, isSuccess, data, isError, error } = createTicket();

    const {
        input: { title, place, price, review },
        onChange: onChangeInput,
        onNumberChange,
        reset,
    } = useInput({
        title: '',
        place: '',
        price: '',
        review: '',
    });

    const [showDate, setShowDate] = useState(formatTenMinutes());
    const [rating, setRating] = useState(3);
    const [category, setCategory] = useState(categoryId ?? 1);

    const [imgfile, setImgfile] = useState(''); // 이미지 파일
    const [imgSrc, setImgSrc] = useState(''); // 이미지 미리보기

    const titleRef = useRef();
    const [titleError, setTitleError] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!isSuccess) return;

        toast.show(SUCCESS_MESSAGE.successCreateTicket);
        navigate(`/ticket/detail/${data.id}`);
    }, [isSuccess]);

    useEffect(() => {
        if (!isError) return;
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
                    toast.show(ERROR_MESSAGE.defaultError);
            }
        }
    }, [isError]);

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const onResetImage = () => {
        setImgSrc('');
        setImgfile('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (title === '') {
            setTitleError('제목을 입력해주세요');
            setIsTitleValid(false);
            titleRef.current.focus();
            return;
        }

        // mutate
        const inputData = {
            categoryId: parseInt(category),
            title: title,
            showDate: formatTicketDate(showDate),
            place: place,
            price: price ?? parseInt(price),
            rating: parseInt(rating),
            review: review,
        };
        let formData = setFormData(inputData);

        if (imgfile !== '') {
            formData.append('file', imgfile);
        }

        mutate(formData);

        reset();
        setIsTitleValid(true);
        setTitleError('');
    };

    return (
        <T.Container>
            {categoryQuery?.isLoading && <Loading></Loading>}
            <T.TitleContainer>
                <h3>티켓 등록</h3>
            </T.TitleContainer>
            <T.TicketForm>
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
                    <Input
                        id="title"
                        labelText="제목"
                        onChange={onChangeInput}
                        value={title}
                        isRequired
                        isValid={titleError === ''}
                        onBlur={() => {
                            if (title !== '') {
                                setIsTitleValid(true);
                                setTitleError('');
                            }
                        }}
                        placeholder="제목을 입력하세요"
                        inputWidth="100%"
                        errorMessage={titleError}
                        ref={titleRef}
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
                            <Input
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
                    <Input
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
                    <Input
                        id="price"
                        labelText="금액"
                        onChange={onNumberChange}
                        value={price}
                        inputType="number"
                        isValid={true}
                        placeholder="금액을 입력하세요"
                        inputWidth="100%"
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
                        등록하기
                    </T.CreateButton>
                </T.ButtonContaienr>
            </T.TicketForm>
        </T.Container>
    );
};
export default TicketCreate;
