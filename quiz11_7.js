//퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록!
//input:['🍌','🍓','🍇','🍓']
//output:['🍌','🥝','🍇','🥝']

const changStrawberry = (array, from, to) => {
  const copyArray = Array.from(array);
  for (let i = 0; i < copyArray.length; i++) {
    if (array[i] === from) {
      copyArray[i] = to;
    }
  }

  return copyArray;
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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count++;
    }
  }

  return count;
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
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }

  return result;
};

const array3 = ["🍌", "🥝", "🍇"];
const array4 = ["🍌", "🍓", "🍇", "🍓"];
const result3 = selectItemsFromArrays(array3, array4);

console.log(result3);
