import Container from '@components/@common/Container/Container.jsx';
import GradeBar from '@components/@common/GradeBar/GradeBar.jsx';

import MyGreeting from '@components/MyPage/MyGreeting/MyGreeting.jsx';
import MyIconButton from '@components/MyPage/MyIconButton/MyIconButton.jsx';
import MyExpense from '@components/MyPage/MyExpense/MyExpense.jsx';

import myIconUrl from '@assets/icons/icon-my.png';
import bookIconUrl from '@assets/icons/icon-book.png';
import chartIconUrl from '@assets/icons/icon-chart.png';

import * as M from './MyPage.styles';

const MyPage = () => {
    return (
        <>
            <Container>
                <M.MyPage>
                    <M.ViewWrap>
                        {/* api 호출 정보 */}
                        <MyGreeting username={'지영'} />
                        <M.IconMenuList>
                            <MyIconButton to="" imgUrl={myIconUrl}>
                                계정정보
                            </MyIconButton>
                            <MyIconButton to="/ticket/list" imgUrl={bookIconUrl}>
                                기록함
                            </MyIconButton>
                            <MyIconButton to="" imgUrl={chartIconUrl}>
                                통계
                            </MyIconButton>
                        </M.IconMenuList>
                        <M.GradeBox>
                            <M.GradeBoxTop>
                                {/* api 호출 정보 */}
                                <h4>문화 전문가</h4>
                                <p>문화 마스터까지 {13}개의 티켓이 필요해요!</p>
                            </M.GradeBoxTop>
                            {/* api 호출 정보 */}
                            <GradeBar total={30} height={0.8} />
                        </M.GradeBox>
                    </M.ViewWrap>
                    <M.DataWrap>
                        {/* api 호출 정보 */}
                        <MyExpense totalPrice={'125,000,000'} />
                    </M.DataWrap>
                </M.MyPage>
            </Container>
        </>
    );
};
export default MyPage;
