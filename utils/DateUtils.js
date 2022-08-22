export const getFormattedDate = (date) => {
    console.log("Date", date);
    if (date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`    
    }
    return null;
}
export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}