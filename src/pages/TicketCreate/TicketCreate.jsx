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

import formatTicketDate from '@utils/formatTicketDate';
import formatKstDate from '@utils/foramtKstDate';
import { useTicketCreateQuery } from '@hooks/@queries/useTicketQuery';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

const TicketCreate = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const categoryQuery = useCategoryQuery();
    const [searchParams, setSearchParams] = useSearchParams();

    const categoryId = searchParams.get('categoryId');

    const { mutate, isSuccess, data, isError } = useTicketCreateQuery();

    const [inputValue, setInputValue] = useState({
        title: '',
        place: '',
        price: '',
        review: '',
    });

    const [showDate, setShowDate] = useState(new Date());
    const [rating, setRating] = useState(3);
    const [category, setCategory] = useState(categoryId ?? 1);

    const [imgfile, setImgfile] = useState(''); // 이미지 파일
    const [imgSrc, setImgSrc] = useState(''); // 이미지 미리보기
    const [imgName, setImgName] = useState(''); // 이미지 이름

    const titleRef = useRef();
    const [titleError, setTitleError] = useState('');
    const [titleValid, setTitleValid] = useState(true);

    useEffect(() => {});

    useEffect(() => {
        if (isSuccess) navigate(`/ticket/detail/${data.id}`);
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            const errorType = query.error.response.data.error.type;

            switch (errorType) {
                case ERROR_TYPE.LIMIT_FILE_SIZE:
                    alert(ERROR_MESSAGE.limitFileSize);
                    break;
                case ERROR_TYPE.LIMIT_FILE_COUNT:
                    alert(ERROR_MESSAGE.limitFileCount);
                    break;

                case ERROR_TYPE.DISALLOW_FILE_TYPE:
                    alert(ERROR_MESSAGE.disallowFileType);
                    break;

                default:
                    alert('관리자에게 문의하세요');
            }
        }
    }, [isError]);

    const onChange = (e) => {
        setInputValue((input) => ({ ...input, [e.target.id]: e.target.value }));
    };

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const onResetImage = () => {
        setImgSrc('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (inputValue.title === '') {
            setTitleError('제목을 입력해주세요');
            setTitleValid(false);
            titleRef.current.focus();
            return;
        }

        // mutate
        let formData = new FormData();

        // 필수
        formData.append('categoryId', parseInt(category));
        formData.append('title', inputValue.title);
        formData.append('showDate', formatTicketDate(showDate));

        // 선택사항
        formData.append('place', inputValue.place);
        formData.append('price', inputValue.price ?? parseInt(inputValue.price));
        formData.append('rating', parseInt(rating));
        formData.append('review', inputValue.review);

        if (imgfile !== '') {
            formData.append('file', imgfile);
        }

        mutate(formData);

        setInputValue({ title: '', place: '', price: '', review: '' });
        setTitleError('');
    };

    if (categoryQuery.isLoading) return <Loading></Loading>;

    return (
        <T.Container>
            <T.TitleContainer>
                <h3>티켓 등록</h3>
            </T.TitleContainer>
            <T.CreateForm onSubmit={(e) => onSubmit(e)}>
                {imgSrc === '' && (
                    <PhotoUploader setImgfile={setImgfile} setImgSrc={setImgSrc} setImgName={setImgName} />
                )}
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
                        onChange={onChange}
                        value={inputValue.title}
                        isRequired
                        isValid={titleValid}
                        onBlur={() => {
                            if (inputValue.title !== '') setTitleValid(true);
                        }}
                        placeholder="제목을 입력하세요"
                        inputWidth="100%"
                        errorMessage={titleError}
                        inputRef={titleRef}
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
                        onChange={onChange}
                        value={inputValue.place}
                        isValid={true}
                        placeholder="장소를 입력하세요"
                        inputWidth="100%"
                    />
                </T.MarginContainer>
                <T.MarginContainer>
                    <T.StyledInput
                        id="price"
                        labelText="금액"
                        onChange={onChange}
                        value={inputValue.price}
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
                        onChange={onChange}
                        value={inputValue.review}
                    />
                </T.ReviewContainer>
                <T.ButtonContaienr>
                    <T.CreateButton full="true" size="large" color={theme.colors.point1} onClick={onSubmit}>
                        등록하기
                    </T.CreateButton>
                </T.ButtonContaienr>
            </T.CreateForm>
        </T.Container>
    );
};
export default TicketCreate;
