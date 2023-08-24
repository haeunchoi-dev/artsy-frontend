import * as M from './MyIconMenu.styles';

import myIconUrl from '@assets/icons/icon-my.png';
import bookIconUrl from '@assets/icons/icon-book.png';
import chartIconUrl from '@assets/icons/icon-chart.png';

const MyIconMenu = () => {
    return (
        <M.IconMenu>
            <M.IconButton $imgUrl={myIconUrl} to="/user/info">
                <span>계정정보</span>
            </M.IconButton>
            <M.IconButton $imgUrl={bookIconUrl} to="/ticket/list">
                <span>기록함</span>
            </M.IconButton>
            <M.IconButton $imgUrl={chartIconUrl} to="">
                <span>통계</span>
            </M.IconButton>
        </M.IconMenu>
    );
};
export default MyIconMenu;
