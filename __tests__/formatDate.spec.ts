import { formatDate } from '../lib/formaDate';

describe('formatDate', () => {
    it('returns date object for 2021-05-10', () => {
        expect(formatDate('2021-05-10')).toMatchObject({
            year: 2021,
            month: 5,
            day: 10,
        });
    });

    it('returns null for incorrect month 2021-13-10', () => {
        expect(formatDate('2021-13-10')).toBe(null);
    });

    it('returns null for incorrect date 2021-10-32', () => {
        expect(formatDate('2021-10-32')).toBe(null);
    });

    it('returns null for incorrect year 1800-10-32', () => {
        expect(formatDate('1800-10-21')).toBe(null);
    });

    it('returns null for incorrect date not in range for february 2000-02-30', () => {
        expect(formatDate('2000-02-30')).toBe(null);
    });

    it('returns null for incorrect date not in range for 30-day months 2000-04-31', () => {
        expect(formatDate('2000-04-31')).toBe(null);
    });
})