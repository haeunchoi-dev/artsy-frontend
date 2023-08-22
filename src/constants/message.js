const CONFIRM_MESSAGE = {
    // 확인 메시지
};

const ERROR_MESSAGE = {
    unexpected: '앗! 오류가 발생했어요.' + '\n' + '잠시 후에 다시 시도해보세요.',
    auth: '로그인이 필요한 페이지입니다. 로그인을 먼저 해주세요.',
    incorrectEmailOrPassword: `이메일 주소 또는 비밀번호를 잘못입력했습니다. 다시 확인해주세요.`,
    incorrectEmailFormat: '이메일 형식이 올바르지 않습니다.',
    duplicatedEmail: '이미 사용 중인 이메일 주소입니다.',
};

const SUCCESS_MESSAGE = {
    // 성공 메시지
};

export { CONFIRM_MESSAGE, ERROR_MESSAGE, SUCCESS_MESSAGE };
