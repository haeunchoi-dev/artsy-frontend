import React, { useEffect, useState } from 'react';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeWidth = () => setWidth(window.innerWidth);

        window.addEventListener('resize', resizeWidth);

        return () => window.removeEventListener('resize', resizeWidth);
    }, []);
    return width;
};

export default useWindowWidth;
