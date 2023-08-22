import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const formatTicketDate = (date) => {
    const timeZone = 'Asia/Seoul';

    return format(date, 'yyyy-MM-dd HH:mm');
};

export default formatTicketDate;
