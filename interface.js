var Person = /** @class */ (function () {
    function Person() {
        this.speed = 30;
    }
    Person.prototype.run = function () {
        return this.speed + "정도로 뜁니다.";
    };
    Person.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Person;
}());
var Robot = /** @class */ (function () {
    function Robot() {
        this.speed = 30;
    }
    Robot.prototype.run = function () {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    };
    Robot.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Robot.prototype.printAddress = function () {
        return;
    };
    return Robot;
}());
var p = new Person(); // p 데이터타입은 person 이며 let p:Action 으로 하면 
p.setSpeed(50); // let s:string = p.setSpeed(50) - 불가능한코드
var str4 = p.run();
console.log(str4);
var r = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
//
function call(vari) {
    console.log(vari.run());
    console.log(vari.printAddress());
}
var p = new Person(); // p 데이터타입은 person 이며 let p:Action 으로 하면 
p.setSpeed(50); // let s:string = p.setSpeed(50) - 불가능한코드
call(p);
var r = new Robot();
r.setSpeed(1000);
call(r);
//let str4 : string =  p.run();
//console.log(str4);
//str4 = r.run();
//console.log(str4);
//# sourceMappingURL=interface.js.map