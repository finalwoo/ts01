var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Worker2 = /** @class */ (function () {
    function Worker2(name) {
        this.name = name;
    }
    Worker2.prototype.goForWork = function () {
        console.log("출근중");
    };
    Worker2.prototype.doWorking = function () {
        console.log("업무중");
    };
    Worker2.prototype.goOut = function () {
        console.log("퇴근중");
    };
    return Worker2;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.doWorking = function () {
        console.log("개발중");
    };
    return Developer;
}(Worker2));
var Coder = /** @class */ (function (_super) {
    __extends(Coder, _super);
    function Coder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coder.prototype.doWorking = function () {
        console.log("코딩중");
    };
    return Coder;
}(Worker2));
function doTest(w) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}
var dev = new Developer();
doTest(dev);
var cod = new Coder();
doTest(cod);
// let dev:Developer = new Developer();
// dev.goForWork();
// dev.doWorking();
// dev.goOut(); 
//# sourceMappingURL=Developer.js.map