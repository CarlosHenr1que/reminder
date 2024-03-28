export const getWeekDayFor = (day: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(day);
};
