import Badge from '@components/Badge/Badge';
import * as H from './Home.styles';
import Record from '@components/Record/Record';
import Greeting from '@components/Greeting/Greeting';
import useUserInfoQuery from '@hooks/@queries/useUserInfoQuery';
import Loading from '@components/@common/Loading/Loading';

const Home = () => {
    const { data: userInfo, isLoading } = useUserInfoQuery();
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
        </H.Home>
    );
};
export default Home;
