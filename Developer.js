class Worker2 {
    constructor(name) {
        this.name = name;
    }
    goForWork() {
        console.log("출근중");
    }
    doWorking() {
        console.log("업무중");
    }
    goOut() {
        console.log("퇴근중");
    }
}
class Developer extends Worker2 {
    doWorking() {
        console.log("개발중");
    }
}
class Coder extends Worker2 {
    doWorking() {
        console.log("코딩중");
    }
}
function doTest(w) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}
let dev = new Developer();
doTest(dev);
let cod = new Coder();
doTest(cod);
// let dev:Developer = new Developer();
// dev.goForWork();
// dev.doWorking();
// dev.goOut(); 
//# sourceMappingURL=Developer.js.map