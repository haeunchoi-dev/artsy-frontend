import { useCallback, useState } from 'react';

const useLockScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const lockScroll = useCallback(() => {
        const { scrollY } = window;
        setScrollPosition(scrollY);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
    }, []);
    const unLockScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    }, [scrollPosition]);

    return { lockScroll, unLockScroll };
};

export default useLockScroll;
