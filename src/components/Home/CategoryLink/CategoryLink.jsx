import React from 'react';
import * as C from './CategoryLink.styles';
import { useNavigate } from 'react-router-dom';
import { getIconUrl } from '@utils/getImageUrl';

const getCategoryImageURL = (categoryId) => {
    return getIconUrl(`category_${categoryId}`);
};

const CategoryLink = ({ name, categoryId }) => {
    const navigate = useNavigate();
    const categoryImageURL = getCategoryImageURL(categoryId);
    const handleClick = () => {
        navigate(`/ticket/create?categoryId=${categoryId}`);
    };
    return (
        <C.CategoryLink onClick={handleClick}>
            <C.CategoryImage src={categoryImageURL} alt={name} />
            <C.CategoryTitle>{name}</C.CategoryTitle>
            <C.MakeTicketLink>
                기록남기기<span>&#62;</span>
            </C.MakeTicketLink>
        </C.CategoryLink>
    );
};

export default CategoryLink;
