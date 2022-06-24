function runInDelay(callback, seconds) {
    if(seconds < 0) {
        throw new Error('0초 이상 입력하세요');
    }
    setTimeout(callback , seconds*1000)
}

function write() {
    console.log("write");
}

runInDelay(write,5);