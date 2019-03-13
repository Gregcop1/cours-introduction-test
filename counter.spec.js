const counter = require('./counter');

describe('increment', () => {
  it('should throw on call without parameter', () => {
    expect(() => counter.increment()).toThrow();
  });

  it('should throw with NaN source', () => {
    expect(() => counter.increment('hey')).toThrow();
  });

  it('should increment', () => {
    expect(counter.increment(1)).toBe(2);
  });

  it('should increment by a specific number', () => {
    expect(counter.increment(1, 5)).toBe(6);
  });
});
