import Badge from '@components/Badge/Badge';
import * as H from './Home.styles';
import Record from '@components/Record/Record';
import Greeting from '../../components/Greeting/Greeting';
import { useTheme } from 'styled-components';

const Home = () => {
    const theme = useTheme();
    return (
        <H.Home $theme={theme}>
            <H.TopContainer $theme={theme}>
                <Greeting />
                <Badge />
            </H.TopContainer>
            <Record />
        </H.Home>
    );
};
export default Home;
