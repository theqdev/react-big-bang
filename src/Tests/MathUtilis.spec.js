import {roundNumber} from '../Utils/math';

describe('Math Helper', () => {
  describe('roundNumber', () => {
    it('returns 0 when passed null', () => {
      expect(roundNumber(null)).toEqual('');
    });

    it('returns 0 when passed 0', () => {
      expect(roundNumber(0)).toEqual(0);
    });

    it('rounds up to 1.56 when passed 1.55555 rounded to 2 digits', () => {
      expect(roundNumber(1.55555, 2)).toEqual(1.56);
    });

    it('rounds up to -1.56 when passed -1.55555 rounded to 2 digits', () => {
      expect(roundNumber(-1.55555, 2)).toEqual(-1.56);
    });
  });

});
