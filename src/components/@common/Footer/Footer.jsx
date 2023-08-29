import * as F from './Footer.styles';

const Footer = () => {
    return (
        <F.StyledFooter>
            <F.StyledFooterInner>
                <F.StyledProjectInfo>
                    <li>
                        <b>Company</b> <span>Artsy</span>
                    </li>
                    <li>
                        <b>Leader</b> <span>최하은</span>
                    </li>
                    <li>
                        <b>Frontend</b>
                        <span>김지윤, 송서현, 이지영</span>
                    </li>
                    <li>
                        <b>Frontend Coach</b>
                        <span>루카스</span>
                    </li>
                    <li>
                        <b>Backend</b> <span>최원진, 최하은</span>
                    </li>
                    <li>
                        <b>Backend Coach</b>
                        <span>박상수</span>
                    </li>
                </F.StyledProjectInfo>
            </F.StyledFooterInner>
        </F.StyledFooter>
    );
};
export default Footer;
