class UserDTO {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let hong = new UserDTO();
hong.name = "abc";
hong.address = "서울시";
hong.setName("홍길동");
console.log(hong.getName());
// let a:number=4;
// test(a);
// console.log(a);
// function test(a:number):void{
//     a=3;
// } 
//# sourceMappingURL=private.js.map