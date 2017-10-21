interface Work{
    goForWork():void;
    doWorking():void;
    goOut():void;
}

class Worker2 implements Work{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    goForWork():void{
        console.log("출근중");
    }
    doWorking():void{
        console.log("업무중");
    }
    goOut():void{
        console.log("퇴근중");
    }
}


class Developer extends Worker2{
    doWorking():void{
        console.log("개발중");
    }
}

class Coder extends Worker2{
    doWorking():void{
        console.log("코딩중");
    }
}

function doTest(w:Work){
    w.goForWork();
    w.doWorking();
    w.goOut();
}

let dev:Work = new Developer();
doTest(dev);
let cod:Work = new Coder();
doTest(cod);


// let dev:Developer = new Developer();
// dev.goForWork();
// dev.doWorking();
// dev.goOut();