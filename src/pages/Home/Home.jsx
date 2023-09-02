import Badge from '@components/Home/Badge/Badge';
import Record from '@components/Home/Record/Record';
import Greeting from '@components/Home/Greeting/Greeting';
import * as H from './Home.styles';
import { getUser } from '@hooks/@queries/useUserInfoQuery';
import Loading from '@components/@common/Loading/Loading';
import MyRecordMobile from '@components/Home/MyRecordMobile/MyRecordMobile';

const Home = () => {
    const { data: userInfo, isLoading } = getUser();
    if (isLoading) return <Loading />;

    return (
        <H.Home>
            <H.TopContainer>
                {userInfo && (
                    <>
                        <Greeting name={userInfo.displayName} />
                        <Badge totalTicket={userInfo.totalTicket} />
                    </>
                )}
            </H.TopContainer>
            <Record />
            <MyRecordMobile />
        </H.Home>
    );
};
export default Home;
