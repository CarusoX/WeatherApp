export const getDateName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-EN', { weekday: 'short' });
}

const format = (d) =>
    `${Math.round(d.getTime() / 1000)}`

export const getMonthPeriod = () => {
    const date = new Date();
    const date2 = new Date();
    date2.setDate(date2.getDate() - 29);
    return {
        'start': format(date2),
        'end': format(date)
    }
}