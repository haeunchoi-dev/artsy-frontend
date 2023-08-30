import { format, setMinutes } from 'date-fns';

const formatTicketDate = (date) => {
    return format(date, 'yyyy-MM-dd HH:mm');
};

const formatKstDate = (time) => {
    time = new Date(time);
    const offset = time.getTimezoneOffset() * 60000;

    return new Date(time.getTime() + offset);
};

const formatDate = (date) => {
    const kst = formatKstDate(date);

    const year = kst.getFullYear();
    const month = kst.getMonth() + 1;
    const day = kst.getDate();

    return `${year}.${month}.${day}`;
};

const formatTenMinutes = () => {
    const nowMinutes = new Date().getMinutes();
    const now = setMinutes(new Date(), Math.floor(nowMinutes / 10) * 10);

    return now;
};

const formatTime = (seconds) => {
    let min = parseInt((seconds % 3600) / 60);
    let sec = seconds % 60;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${min} : ${sec}`;
};

export { formatTicketDate, formatKstDate, formatDate, formatTime, formatTenMinutes };
