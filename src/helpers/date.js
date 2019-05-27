export const getDateName = (dateStr) => {
    console.log(dateStr)
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-EN', { weekday: 'short' });
}

export const getMonthPeriod = () => {
    
}