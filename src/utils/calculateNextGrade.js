import { BADGE_GRADE } from '@constants/badgeGrade';

const calculateNextGrade = (grade) => {
    const totalGrade = BADGE_GRADE.length;
    const nowGrade = BADGE_GRADE.find((value) => value.name === grade);
    const nowIndex = BADGE_GRADE.indexOf(nowGrade);
    const nextGrade = nowIndex === totalGrade - 1 ? nowGrade : BADGE_GRADE[nowIndex + 1];
    const isNext = nowIndex === totalGrade - 1;
    return { nextGrade, isNext };
};

export default calculateNextGrade;
