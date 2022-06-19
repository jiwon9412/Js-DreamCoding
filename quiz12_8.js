//Quiz
//changeColor함수의 파라미터 값 만들기
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
