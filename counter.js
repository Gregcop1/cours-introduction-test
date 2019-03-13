const counter = {
  increment: (source, gap = 1) => {
    if (source === undefined || isNaN(source)) {
      throw new Error('You have to pass a number as param')
    }

    return source + gap;
  },
};

module.exports = counter;
