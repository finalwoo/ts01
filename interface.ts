interface Action{ //  interface는 변수선언만 가능, 규격 약속의 개념
    // test = function(){} // 이런식으로 사용할수없음
    // test : string;
    run() : string; // run = function():string;
    setSpeed(speed:number) : void; // let p 의 데이터타입을 action으로 할경우 이렇게 넣어줌
    printAddress():string;
}



class Person implements Action {
    speed:number = 30;
    run(){
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
}

class Robot implements Action {
    speed:number = 30;
    run(){
        return "로봇이" + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
    printAddress():string{
        return
    }
}

let p:Action = new Person(); // p 데이터타입은 person 이며 let p:Action 으로 하면 
p.setSpeed(50); // let s:string = p.setSpeed(50) - 불가능한코드
let str4 : string =  p.run();
console.log(str4);

let r:Action = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);


//
function call(vari:Action) {
    console.log(vari.run());
    console.log(vari.printAddress());
}

let p:Action = new Person(); // p 데이터타입은 person 이며 let p:Action 으로 하면 
p.setSpeed(50); // let s:string = p.setSpeed(50) - 불가능한코드
call(p);
let r:Action = new Robot();
r.setSpeed(1000);
call(r);
//let str4 : string =  p.run();
//console.log(str4);
//str4 = r.run();
//console.log(str4);
