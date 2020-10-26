import moment from 'moment';

const format = 'DD-MM-YYYY, h:mm a';

export const parseDate = (date) => moment(date).format(format);

export const now = () => moment().format(format);
