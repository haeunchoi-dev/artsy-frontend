const BADGE_GRADE = [
    { name: '아티 비기너', targetValue: 10, imageName: 'darkSilver' },
    { name: '아티 프렌즈', targetValue: 30, imageName: 'bronze' },
    { name: '아티 패밀리', targetValue: 70, imageName: 'silver' },
    { name: '아티 마스터', targetValue: Number.POSITIVE_INFINITY, imageName: 'gold' },
];
const calculateGrade = (ticketCount) => {
    const selectedGrade = BADGE_GRADE.find(({ targetValue }) => ticketCount < targetValue);
    return selectedGrade;
};

export default calculateGrade;
