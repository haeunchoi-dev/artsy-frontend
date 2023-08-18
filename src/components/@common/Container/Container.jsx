import * as C from './Container.styls';

const Container = ({ children }) => {
    return <C.maxWidth>{children}</C.maxWidth>;
};
export default Container;
