import React from 'react';
import * as G from './Grade.styles';
import { BADGE_GRADE } from '@constants/badgeGrade.js';

import PeopleImageUrl from '@assets/images/img-grade.png';
import starsImageUrl from '@assets/images/img-twoStars.png';
import Container from '@components/@common/Container/Container';

import Badge from '@components/Grade/Badge/Badge';

const Grade = () => {
    return (
        <Container>
            <G.Container>
                <G.TopContent>
                    <h2>나의 문화생활은 어떤 단계일까요?</h2>
                    <p>Artys만의 특별한 뱃지로 확인 할 수 있습니다!</p>
                    <G.Background>
                        <G.ImageWrap>
                            <img src={PeopleImageUrl} alt="flying people" />
                        </G.ImageWrap>
                        <G.ImageWrap>
                            <img src={starsImageUrl} alt="two stars" />
                        </G.ImageWrap>
                    </G.Background>
                </G.TopContent>
                <G.RoundBox>
                    <p>
                        일년 동안 <span>70</span>개의 티켓을 모으면 <span>아티 마스터</span>가 됩니다!
                    </p>
                    <p>
                        <span>아티 마스터</span>에 도전하세요!
                    </p>
                </G.RoundBox>
                <G.BadgesContainer>
                    {BADGE_GRADE.map((grade, index) => {
                        const prevGrade = BADGE_GRADE[index - 1];
                        return <Badge key={index} grade={grade} prevGrade={prevGrade} />;
                    })}
                </G.BadgesContainer>
            </G.Container>
        </Container>
    );
};

export default Grade;
