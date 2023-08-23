import * as P from './PageNotFound.styles';
import { useNavigate } from 'react-router-dom';

import Button from '@components/@common/Button/Button.jsx';

import noPageUrl from '@assets/icons/icon-nopage.png';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <P.StyledPageNotFound>
            <P.StyledIcon>
                <img src={noPageUrl} alt="페이지없음" />
            </P.StyledIcon>
            <h2>페이지를 찾을 수 없습니다.</h2>
            <Button size="medium" onClick={() => navigate('/')}>
                홈으로 돌아가기
            </Button>
        </P.StyledPageNotFound>
    );
};

export default PageNotFound;
