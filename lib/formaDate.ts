export const formatDate = (dateToFormat: string) => {
    const [year, month, day] = dateToFormat
        .split('-')
        .map(datePart => +datePart);

    if (year < 1900  || year > 2100) {
        return null
    }

    if (month < 1  || month > 12) {
        return null
    }

    if (day < 1  || day > 31) {
        return null
    }

    if (day <= 31 && day > 28) {
        const date = new Date(year, month -1, day);
        const dateDay = date.getDate();

        if(dateDay !== day) {
            return null;
        }
    }

    return {
        year,
        month,
        day,
    }
};