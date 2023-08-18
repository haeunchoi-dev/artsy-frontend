import StyledMyExpense from './MyExpense.styles';

const MyExpense = ({ totalPrice }) => {
    return (
        <StyledMyExpense>
            <h4>총 지출</h4>
            <p>
                <span>{totalPrice}</span> 원
            </p>
        </StyledMyExpense>
    );
};
export default MyExpense;
