import StyledToastContainer from './ToastContainer.styles';

import Toast from '@components/@common/Toast/Toast.jsx';

const ToastContainer = ({ toasts }) => {
    return (
        <StyledToastContainer>
            {toasts?.map(({ message, id }) => {
                return <Toast key={id} message={message} id={id} />;
            })}
        </StyledToastContainer>
    );
};
export default ToastContainer;
