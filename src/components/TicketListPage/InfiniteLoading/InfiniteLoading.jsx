import { forwardRef } from 'react';

import StyledInfiniteLoading from './InfiniteLoading.styles';

const InfiniteLoading = forwardRef((props, ref) => {
    return <StyledInfiniteLoading ref={ref}>{props.isNext ? <span></span> : ''}</StyledInfiniteLoading>;
});
export default InfiniteLoading;
