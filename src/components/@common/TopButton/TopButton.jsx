import StyledTopButton from './TopButton.styles';
import useScrollToggle from '@hooks/useScrollToggle';

const TopButton = () => {
    const isScroll = useScrollToggle(false, 100);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return isScroll && <StyledTopButton onClick={handleScrollTop}></StyledTopButton>;
};
export default TopButton;
