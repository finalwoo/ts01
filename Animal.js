class Cat {
    constructor(name, age) {
        this.name = "name";
        this.age = age;
    }
    printInfo() {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName() {
        console.log("이름: " + this.name);
    }
}
//
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("새의 종류는 : " + this.kind);
    }
}
class Chicken extends Bird {
    constructor(kind) {
        super(kind);
    }
    printInfo() {
        super.printInfo(); // super는 상위에있는걸 불러옴
        console.log("내종류? 당연히 닭이지");
        console.log("test");
    }
}
class Egg extends Chicken {
}
let c = new Chicken("닭");
c.printInfo();
c = new Egg();
console.log( instanceof (c));
let dd = new Cat("동동이", 4);
dd.printInfo();
function printSomething(a) {
    a.printInfo();
}
let dd = new Cat("동동이", 4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2 = new Cat("사랑이", 3);
d2.printName();
//# sourceMappingURL=Animal.js.map