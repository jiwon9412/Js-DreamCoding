const makeIterator = (initialValue, maxValue, callback) => {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return {
            value: callback(num++),
            done: num > maxValue,
          };
        },
      };
    },
  };
};

const multiple = makeIterator(0, 20, (n) => n * 2);

for (let num of multiple) {
  console.log(num);
}
