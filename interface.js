class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    printAddress() {
        return;
    }
}
let p = new Person(); // p 데이터타입은 person 이며 let p:Action 으로 하면 
p.setSpeed(50); // let s:string = p.setSpeed(50) - 불가능한코드
let str4 = p.run();
console.log(str4);
let r = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
//
function call(vari) {
    console.log(vari.run());
    console.log(vari.printAddress());
}
let p = new Person(); // p 데이터타입은 person 이며 let p:Action 으로 하면 
p.setSpeed(50); // let s:string = p.setSpeed(50) - 불가능한코드
call(p);
let r = new Robot();
r.setSpeed(1000);
call(r);
//let str4 : string =  p.run();
//console.log(str4);
//str4 = r.run();
//console.log(str4);
//# sourceMappingURL=interface.js.map