const CONFIRM_MESSAGE = {
    // 확인 메시지
};

const ERROR_MESSAGE = {
    unexpected: '앗! 오류가 발생했어요.' + '\n' + '잠시 후에 다시 시도해보세요.',
    auth: '로그인이 필요한 페이지입니다. 로그인을 먼저 해주세요.',
    incorrectEmailOrPassword: `이메일 주소 또는 비밀번호를 잘못입력했습니다. 다시 확인해주세요.`,
    incorrectEmailFormat: '이메일 형식이 올바르지 않습니다.',
    limitFileSize: '등록한 사진의 용량이 큽니다. 다른 사진을 등록해주세요.',
    limitFileCount: '등록한 사진의 개수가 많습니다.',
    disallowFileType: '등록한 사진이 형식에 맞지 않습니다.',
    dataNotFoundTicket: '해당되는 티켓이 없습니다. 다시 확인해주세요',
    duplicatedEmail: '이미 사용 중인 이메일 주소입니다.',
    incorrectRegister: '닉네임 또는 비밀번호를 다시 확인해주세요',
    failLogout: '로그아웃에 실패했습니다.',
    required: '필수 입력 항목입니다.',
    incorrectDisplayName: '이름은 숫자, 영문 소문자, 영문 대문자, "-", "_" 를 포함하여 3~15자를 입력해주세요.',
    incorrectPassword: '비밀번호는 영문 소문자,대문자, 숫자, 특수문자를 포함하여 입력해주세요.',
    incorrectConfirmPassword: '비밀번호가 일치하지 않습니다.',
    failUpdateUser: '회원 정보 수정에 실패했습니다.',
    defaultError: '관리자에게 문의하세요',
};

const SUCCESS_MESSAGE = {
    validEmail: '사용가능한 이메일 주소입니다.',
    successRegister: '성공적으로 가입되었습니다!',
    successLogout: '로그아웃 했습니다.',
    successCreateTicket: '성공적으로 티켓이 추가되었습니다.',
    successUpdateTicket: '성공적으로 티켓이 수정되었습니다.',
    successDeleteTicket: '성공적으로 티켓이 삭제되었습니다.',
    successUpdateUser: '성공적으로 회원 정보를 수정했습니다.',
};

export { CONFIRM_MESSAGE, ERROR_MESSAGE, SUCCESS_MESSAGE };
