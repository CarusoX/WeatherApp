export const getDateName = dateStr => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-EN", { weekday: "long" });
};

const format = d => `${Math.round(d.getTime() / 1000)}`;

export const getMonthPeriod = () => {
  const date = new Date();
  const date2 = new Date();
  date2.setDate(date2.getDate() - 29);
  return {
    start: format(date2),
    end: format(date)
  };
};

export const unixToHoursLarge = t => {
  const dt = new Date(1000 * t);
  const hr = dt.getHours();
  const m = `0${dt.getMinutes()}`;
  const s = `0${dt.getSeconds()}`;
  return `${hr}:${m.substr(-2)}:${s.substr(-2)}`;
};

export const unixToHoursMedium = t => {
  const dt = new Date(1000 * t);
  const hr = dt.getHours();
  const m = `0${dt.getMinutes()}`;
  return `${hr}:${m.substr(-2)}`;
};

export const unixToHoursSmall = t => {
  const dt = new Date(1000 * t);
  const hr = dt.getHours();
  return `${hr}`;
};
