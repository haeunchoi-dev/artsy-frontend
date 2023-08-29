import * as M from './MyIconMenu.styles';

import myIconUrl from '@assets/icons/icon-my.png';
import bookIconUrl from '@assets/icons/icon-book.png';
import chartIconUrl from '@assets/icons/icon-chart.png';

const MyIconMenu = () => {
    return (
        <M.IconMenu>
            <M.IconButton $imgUrl={myIconUrl} to="/user/edit">
                <span>회원정보수정</span>
            </M.IconButton>
            <M.IconButton $imgUrl={bookIconUrl} to="/ticket/list">
                <span>기록함</span>
            </M.IconButton>
            <M.IconButton $imgUrl={chartIconUrl} to="/user/stats">
                <span>통계</span>
            </M.IconButton>
        </M.IconMenu>
    );
};
export default MyIconMenu;
