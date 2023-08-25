import { useContext } from 'react';
import { HeaderContext } from '@contexts/HeaderContext';

const useHeaderContext = () => useContext(HeaderContext);

export default useHeaderContext;
