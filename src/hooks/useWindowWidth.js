import { useEffect, useState } from 'react';
import throttle from '@utils/throttle';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeWidth = () => throttle(setWidth(window.innerWidth), 100);

        window.addEventListener('resize', resizeWidth);

        return () => window.removeEventListener('resize', resizeWidth);
    }, []);
    return width;
};

export default useWindowWidth;
