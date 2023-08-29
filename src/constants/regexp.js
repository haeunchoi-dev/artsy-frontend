const VALIDATE = {
    // 유효성 검사 정규표현식
    email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    displayName: /^[0-9a-zA-Z가-힣]([-_\.]?[0-9a-zA-Z가-힣]){2,14}$/i,
    password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*+=-]{8,15}$/,
};
export { VALIDATE };
