import { useNavigate } from 'react-router-dom';

import Container from '@components/@common/Container/Container.jsx';

import bookUrl from '@assets/icons/icon-book.png';
import chartUrl from '@assets/icons/icon-chart2.png';
import onlineUrl from '@assets/icons/icon-online.png';

import * as I from './Intro.styles';
import useAuthQuery from '@hooks/@queries/useAuthQuery';
import useAuthContext from '@hooks/useAuthContext';

const Intro = () => {
    const navigate = useNavigate();
    const { data } = useAuthQuery();
    const { isLogin } = useAuthContext();

    const handleStartClick = () => {
        navigate(`${data && isLogin ? '/home' : '/signin'}`);
    };
    return (
        <>
            <Container>
                <I.MainVisual>
                    <I.MainImage />
                    <I.MainText>
                        <h2>
                            보기만 해도 뿌듯한!
                            <br /> 나만의 티켓북
                        </h2>
                        <p>이제 온라인으로 나만의 문화 티켓을 기록하세요.</p>
                        <I.MainButton size="medium" color="#fff" onClick={handleStartClick}>
                            바로 시작하기
                        </I.MainButton>
                    </I.MainText>
                </I.MainVisual>
            </Container>
            <I.ServiceInfo>
                <ul>
                    <li>
                        <I.ServiceIcon>
                            <img src={bookUrl} alt="" />
                        </I.ServiceIcon>
                        <span>
                            나만의 문화기록을
                            <br /> 작성하고 싶은 분
                        </span>
                    </li>
                    <li>
                        <I.ServiceIcon>
                            <img src={onlineUrl} alt="" />
                        </I.ServiceIcon>
                        <span>
                            티켓을 온라인으로
                            <br /> 관리하고 싶은 분
                        </span>
                    </li>
                    <li>
                        <I.ServiceIcon>
                            <img src={chartUrl} alt="" />
                        </I.ServiceIcon>
                        <span>
                            문화생활 통계를
                            <br /> 확인하고 싶은 분
                        </span>
                    </li>
                </ul>
            </I.ServiceInfo>
            <I.MainBanner>
                <h3>
                    간편하게 사용할 수 있는
                    <br /> 나만의 티켓북
                </h3>
                <I.BannerButton size="small" onClick={handleStartClick}>
                    바로 시작하기
                </I.BannerButton>
            </I.MainBanner>
        </>
    );
};
export default Intro;
