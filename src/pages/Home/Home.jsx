import Badge from '@components/Home/Badge/Badge';
import Record from '@components/Home/Record/Record';
import Greeting from '@components/Home/Greeting/Greeting';
import * as H from './Home.styles';
import { useUserGetQuery } from '@hooks/@queries/useUserInfoQuery';
import Loading from '@components/@common/Loading/Loading';

const Home = () => {
    const { data: userInfo, isLoading } = useUserGetQuery();

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
