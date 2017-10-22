// enum 열거형데이터타입, erp등 솔루션에서 
var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
;
let cp = Computer.Laptop;
console.log(cp);
// any 어떤데이터타입도 사용가능
let cp2;
cp2 = "abc";
cp2 = 123;
cp2 = true;
class EE {
    constructor(pc) {
        this.name = "nam";
        this.pc = pc;
    }
    printInfo() {
        console.log(name + "님이 가지고 계신 pc는 " + this.pc + "입니다.");
    }
}
// let ee:EE = new EE(Computer.Laptop)
cp2 = new EE();
// 넘기겠다고하면 return만 있으면됨
function examReturn() {
    return "examreturn함수 호출";
    //  return 1; // return은 데이터를 넘기며 빠져나가기때문에 두번은 사용안됨
}
// void는 넘기지않을때 사용, return이 없으면 오류없음
function examVoid() {
    //    return "examVoid함수 호출";
}
let a;
a = examReturn();
a = examVoid();
/*---------------------------------------------------------*/
console.log('---------');
let testArr = [1, 2, 3];
console.log(testArr);
class GG {
    constructor() {
        this.name = "nam";
    }
}
let ee = new GG();
console.log(ee);
/*---------------------------------------------------------*/
console.log('---------');
let str1 = "str";
let str2 = "str";
let str3 = new String("str");
let str4 = new String("str");
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
console.log("str1==str2 : " + (str1 == str2));
console.log("str1==str3 : " + (str1 == str3));
console.log("str3==str4 : " + (str3 == str4));
console.log("str1===str2 : " + (str1 === str2));
console.log("str1===str3 : " + (str1 === str3));
console.log("str3===str4 : " + (str3 === str4));
console.log("str3 equals str4 : " + (str3.equals(str4)));
console.log(str4.toString());
//
//# sourceMappingURL=Computer.js.map