const BADGE_GRADE = {
    first: { name: 'darkSilver', targetValue: 10 },
    second: { name: 'bronze', targetValue: 30 },
    third: { name: 'silver', targetValue: 50 },
    fourth: { name: 'gold', targetValue: 100 },
};

const calculateGrade = (ticketCount) => {
    if (ticketCount < BADGE_GRADE.first.targetValue) {
        return BADGE_GRADE.first;
    } else if (ticketCount < BADGE_GRADE.second.targetValue) {
        return BADGE_GRADE.second;
    } else if (ticketCount < BADGE_GRADE.third.targetValue) {
        return BADGE_GRADE.third;
    } else {
        return BADGE_GRADE.fourth;
    }
};
export default calculateGrade;
