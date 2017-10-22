/*
var str = "test";
var str2 = "test2";
var num = 3;
var num2 = new Number(3);
var num3 = new Number(3);

console.log (typeof str);
console.log(num);
console.log(num2);
console.log(num==num2);
console.log(num===num2);

console.log(typeof num);
console.log(typeof num2);
*/
// ctrl + shift + b  // ts -> js변환
/*---------------------------------------------------------*/
// 171022 
let userList = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
/*---------------------------------------------------------*/
console.log('---------');
// 일반코드
let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
// 위코드를 아래와같이 제너릭(?)으로표현 
let tList = new Array();
tList.push(true);
tList.push("1");
/*---------------------------------------------------------*/
console.log('---------');
// const는 상수처럼 값이 변하지않음, console 에는 찍혀도 빨간줄 오류
const tt = 3; // const를 사용할때는 값을 넣어줘야함 값을안넣어주면 오류
// tt = 4; // 변수처럼 사용할수없기때문에 오류
// tt = "다다"; // 변수처럼 사용할수없고 데이터타입 다르기때문에 오류
console.log(tt);
console.log(typeof tt);
// 튜플
let tt2 = 2; // number와 string을 둘다 사용할수있음
tt2 = "다다";
console.log(tt2);
console.log(typeof tt2);
/*---------------------------------------------------------*/
console.log('---------');
// 변경전
// let add 
// = function(n1:number|string,n2:number|string):number|string{
//     return 1;
// }
// 변경후
let add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "숫자가 아닙니다";
    }
    if (typeof n2 != "number") {
        return "숫자가 아닙니다";
    }
    return n1 + n2;
};
console.log(add(1, "2"));
/*---------------------------------------------------------*/
console.log('---------');
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);
/*---------------------------------------------------------*/
console.log('---------');
//  자기자신을 바꿀순없기때문에 examList 는 null 이안됨..(?)
function initList(examList) {
    examList = null;
}
initList(examList);
/*---------------------------------------------------------*/
console.log('---------');
// 로또
class Lotto {
    constructor() {
        this.numbers = new Array();
    }
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            if (this.valiNumbers(num)) {
                continue;
            }
            // if(this.numbers.indexOf(num)!=-1){ // 중복제외처리
            //     continue;
            // }
            this.numbers.push(num);
        }
    }
    valiNumbers(num) {
        return this.numbers.indexOf(num) != -1;
    }
    getNumbers() {
        return this.numbers;
    }
}
let lot = new Lotto();
lot.makeNumbers();
console.log(lot.getNumbers());
/*---------------------------------------------------------*/
console.log('---------');
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
for (let arr in arrs) {
    console.log(arrs[arr]);
}
console.log('---------');
for (let i = 0, max = arrs.length; i < max; i++) {
    console.log(arrs[i]);
}
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1;
lot1 = mn; // mn이 상위이기 때문에 오류
let test = new Set();
test.add("1");
test.add("1");
for (let i in test) {
    console.log(i);
}
for (let i of test) {
    console.log(i);
}
//# sourceMappingURL=test.js.map