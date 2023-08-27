import Badge from '@components/Home/Badge/Badge';
import Record from '@components/Home/Record/Record';
import Greeting from '@components/Home/Greeting/Greeting';
import * as H from './Home.styles';
import { getUser } from '@hooks/@queries/useUserInfoQuery';
import Loading from '@components/@common/Loading/Loading';
import MyRecordMobile from '@components/Home/MyRecordMobile/MyRecordMobile';
import useWindowWidth from '@hooks/useWindowWidth';
import { useTheme } from 'styled-components';

const Home = () => {
    const { data: userInfo, isLoading } = getUser();
    const theme = useTheme();
    const windowWidth = useWindowWidth();
    const tabletSize = theme.devicesSize.tablet.replace('px', '');
    if (isLoading) return <Loading />;
    const { displayName, totalTicket } = userInfo;
    return (
        <H.Home>
            <H.TopContainer>
                {userInfo && (
                    <>
                        <Greeting name={displayName} />
                        <Badge totalTicket={totalTicket} />
                    </>
                )}
            </H.TopContainer>
            <Record />
            {windowWidth <= tabletSize && <MyRecordMobile />}
        </H.Home>
    );
};
export default Home;
