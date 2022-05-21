import { parseText } from '../lib/parseText';


describe('parseText', () => {
    it('returns ', () => {
        expect(parseText('JavaScript', [4, 9])).toBe('<p>Java<span>Script</span></p>');
    });

    it('returns ', () => {
        expect(parseText('JSDzem', [2, 5])).toBe('<p>JS<span>Dzem</span></p>');
    });

    it('returns ', () => {
        expect(parseText('DzemJS', [0, 3])).toBe('<p><span>Dzem</span>JS</p>');
    });
});