const counter = require('./counter');

describe('increment', () => {
  it('should throw if with no parameter', () => {
    expect(() => counter.increment()).toThrow();
  });

  it('should throw if with NaN source', () => {
    expect(() => counter.increment('hey')).toThrow();
  });

  it('should increment', () => {
    expect(counter.increment(1)).toBe(2);
  });
});

describe('incrementByX', () => {
    it('should increment by a specific number', () => {
      expect(counter.incrementByX(1, 5)).toBe(6);
    })
});
