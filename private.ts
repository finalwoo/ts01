class UserDTO{
    private name : string;
    private age : number;
    public address : string;
    setName(name:string):void{
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}

let hong:UserDTO = new UserDTO();
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