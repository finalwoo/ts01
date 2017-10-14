let num1:number = 3;
num1 = "test";
let num2:number = 5;


let str1:string = "string";
let str2:string = "test";

let numArr:Array<number> = [3,5,6];
let numArr2:number[] = [3,4,5];

console.log(num1);
console.log(numArr);

//

let tp :[string, number];
tp = ["1", 2];

let anyTest : any ="any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr :any[] = [1,2,3];

//

function setUser():string{  //void는 아무것도 넘기지 않음
    return "test";
}

//

function testObject(){
    return "abc";
}
var strTest = testObject();
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);


//

function testFunc(str:string, num:number):void{
    console.log("str = " + str);
    console.log("num = " + num);
} 
testFunc("문자열",330)


//
//예외처리 try catch(e) - 오류시 처리방법 변경
/*
요리시작
try {
    재료손질 // 오류시점 - 요리중단
}catch(e) {
    요리변경, 재료사오기..  // 오류부분을 대체하여 요리진행
}
요리완료
*/

function throwError():never{
    throw new Error("nonono"); // throw는 에러를 발생시킴(?)
}


/* 오류생김
interface testIter {
    str : string,
    num : number;
}
let AjaxUtil  = function(ti:testIter){
    this.print = function():void{
        console.log(str);
        console.log(num);
    }
}
var test1 = {str:"홍길동", num:30}
var au = new AjaxUtil(test1);
au.print();
*/


//

class Car {
    carName : string;
    constructor(public pCarName:string){ // constructor 생성자
        this.carName = pCarName;
    }
}

let hyundai = new Car("Sonata");
let pStr:string = "hyundai 자동차중 제 차는 : "
pStr += hyundai.carName;
console.log(pStr)













