import moment from 'moment';

const format = 'DD-MM-YYYY, h:mm a';

export const parseDate = (date) => moment(date).format(format);

export const now = () => moment().format(format);

export const resolveTimeText = (date) => {
  const dateDifference = moment(date, 'DD MM YYYY hh:mm:ss').fromNow(true);
  const values = dateDifference.split(' ');
  switch (values[1]) {
    case 'few':
      return `Hace algunos segundos.`;
    case 'minute':
      return `Hace 1 minuto.`;
    case 'minutes':
      return `Hace ${values[0]} minutos.`;
    case 'hour':
      return `Hace ${values[0]} hora.`;
    case 'hours':
      return `Hace ${values[0]} horas.`;
    case 'day':
      return `Hace ${values[0]} día.`;
    case 'days':
      return `Hace ${values[0]} días.`;
    case 'month':
      return `Hace ${values[0]} mes.`;
    case 'months':
      return `Hace ${values[0]} meses.`;
    case 'year':
      return `Hace ${values[0]} año.`;
    case 'years':
      return `Hace ${values[0]} años.`;
    default:
      return date;
  }
};
