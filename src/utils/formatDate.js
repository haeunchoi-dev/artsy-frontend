import formatKstDate from '@utils/foramtKstDate';

const formatDate = (date) => {
    const kst = formatKstDate(date);

    const year = kst.getFullYear();
    const month = kst.getMonth() + 1;
    const day = kst.getDay();

    return `${year}.${month}.${day}`;
};

export default formatDate;
