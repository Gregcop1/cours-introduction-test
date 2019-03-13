const counter = {
  increment: (source) => {
    if (source === undefined || isNaN(source)) {
      throw new Error('You have to pass a number as param')
    }

    return source + 1;
  },
  incrementByX: (source, gap) => {
    let result = source;

    for (let i = 0; i < gap; i++) {
      result = counter.increment(result);
    }

    return result;
  },
};

module.exports = counter;
