class Counter {
  start;
  end;
  value;

  constructor(start, end) {
    if (start < 0) {
      this.start = 0;
    } else {
      this.start = start;
    }

    if (end < this.start) {
      console.log(`end 값이 start보다 작습니다.`);
      return;
    } else {
      this.end = end;
    }
    this.value = this.start;
  }

  countUp() {
    if (this.value >= this.end) {
      console.log(`카운트 종료 end도달 : ${this.end}`);
    } else {
      this.value++;
    }
  }
}

const counter = new Counter(-1, 4);
counter.countUp();
console.log(counter.value);
counter.countUp();
counter.countUp();
counter.countUp();
counter.countUp();
console.log(counter.value);
