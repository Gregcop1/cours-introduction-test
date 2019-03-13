const counter = {
  increment: (source) => {
    if (source === undefined || isNaN(source)) {
      throw new Error('You have to pass a number as param')
    }

    return source + 1;
  },
};

module.exports = counter;
