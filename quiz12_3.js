// 0부터 10이하의 숫자의 2배를 순회하는 이터레이터 만들기!
// 다시 풀기!!!!!!!!!!!!1

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;

    return {
      next() {
        return {
          value: num++ * 2,
          done: num > max,
        };
      },
    };
  },
};

for (let num of multiple) {
  console.log(num);
}
