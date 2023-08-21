import { BADGE_GRADE } from '@constants/badgeGrade';

const calculateGrade = (ticketCount) => {
    const selectedGrade = BADGE_GRADE.find(({ targetValue }) => ticketCount < targetValue);
    return selectedGrade;
};

export default calculateGrade;
