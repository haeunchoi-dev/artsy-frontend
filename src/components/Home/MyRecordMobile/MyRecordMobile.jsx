import React from 'react';
import * as M from './MyRecordMobile.styles';
import bookUrl from '@assets/icons/icon-book.png';
import ArrowUrl from '@assets/icons/icon-arrowLeft.png';
const MyRecordMobile = () => {
    return (
        <M.Container to="/ticket/list">
            <M.BookImage src={bookUrl} alt={'book'} />
            <M.Content>
                당신의 소중한 문화 기록을 확인해보세요! <M.RightArrow />
            </M.Content>
        </M.Container>
    );
};

export default MyRecordMobile;
