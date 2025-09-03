import { getSum } from './getSum';

describe('getSum', () => {
    it('Add 2 and 2, result is 4', () => {
        const actual = getSum(2, 2);
        const expected = 4;
        expect(actual).toEqual(expected);
    });


    it('Add 3 and 3, result is 6', () => {
        const actual = getSum(3, 3);
        const expected = 6;
        expect(actual).toEqual(expected);
    });

});