import StyledMyGreeting from './MyGreeting.styles';

const MyGreeting = ({ username }) => {
    return (
        <StyledMyGreeting>
            <h2>
                {username}, <br />
                환영합니다!
            </h2>
        </StyledMyGreeting>
    );
};
export default MyGreeting;
