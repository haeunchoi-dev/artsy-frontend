import { format } from 'date-fns';

const formatTicketDate = (date) => {
    return format(date, 'yyyy-MM-dd HH:mm');
};

export default formatTicketDate;
