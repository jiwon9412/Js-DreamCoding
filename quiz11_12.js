//quiz11_7.js 문제들을 고차함수 이용해서 간단히 풀기!! + 문제4번

//퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록!
//input:['🍌','🍓','🍇','🍓']
//output:['🍌','🥝','🍇','🥝']

const changStrawberry = (array, from, to) => {
  return array.map((item) => (item === from ? to : from));
};

const array = ["🍌", "🍓", "🍇", "🍓"];
const result = changStrawberry(array, "🍓", "🥝");

console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트하는 함수 만들기
// input : ['🍌','🥝','🍇','🥝'] '🥝'
// output : 2

const countFruit = (array, key) => {
  let count = 0;
  //array.map((value) => (value === key ? count++ : "")) return count;; 이것도 맞긴함
  return array.filter((value) => value === key).length;
};

const array2 = ["🍌", "🥝", "🍇", "🥝"];
const key = "🥝";
const result2 = countFruit(array2, key);

console.log(result2);

// 퀴즈 3:
// 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input : ['🍌','🥝','🍇'] , ['🍌','🍓','🍇','🍓']
// output : ['🍌','🍇']

const selectItemsFromArrays = (array1, array2) => {
  return array1.filter((value) => array2.includes(value));
};

const array3 = ["🍌", "🥝", "🍇"];
const array4 = ["🍌", "🍓", "🍇", "🍓"];
const result3 = selectItemsFromArrays(array3, array4);

console.log(result3);

// 퀴즈 4
// 5보다 큰 숫자들의 평균

//나의 풀이
// const calcAverage = (array, num) => {
//   let sum = 0;
//   let cnt = 0;
//   array.map((value) => {
//     if (value > 5) {
//       sum += value;
//       cnt++;
//     }
//   });

//   return sum / cnt;
// };
// const result4 = calcAverage(nums, 5);

// 앨리님 풀이
const nums = [3, 16, 5, 25, 4, 34, 21];

const result4 = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result4);
