interface Animal{
    name:string;
    age:number;
    height:number;
    printInfo():void;
}

class Cat implements Animal {
    name:string;
    age:number;
    height:number;
    constructor(name:string, age:number){ // constructor = 생성자
        this.name = "name";
        this.age = age;
    }
    printInfo(){
        console.log("이름 : " + this.name)  ;
        console.log("나이 : " + this.age)  ;
    }
    printName(){
        console.log("이름: " + this.name)
    }
}


//
class Bird implements Animal {
    name:string;
    age:number;
    height:number;
    kind:string;
    constructor(kind:string){ // constructor = 생성자
        this.kind = kind;
    }
    printInfo(){
        console.log("새의 종류는 : " + this.kind)  ;
    }
}

class Chicken extends Bird{
    constructor(kind:string){
        super(kind);
    }
    printInfo():void{
        super.printInfo(); // super는 상위에있는걸 불러옴
        console.log("내종류? 당연히 닭이지");
        console.log("test");
    }
}

class Egg extends Chicken{

}

let c:Animal = new Chicken("닭")
c.printInfo();
c = new Egg();
console.log(instanceof(c));


let dd:Cat = new Cat("동동이", 4);
dd.printInfo();
function printSomething(a:Animal){
    a.printInfo();
}

let dd:Cat = new Cat("동동이", 4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2:Cat = new Cat("사랑이", 3);
d2.printName();