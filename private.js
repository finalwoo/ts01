var UserDTO = /** @class */ (function () {
    function UserDTO() {
    }
    UserDTO.prototype.setName = function (name) {
        this.name = name;
    };
    UserDTO.prototype.getName = function () {
        return this.name;
    };
    return UserDTO;
}());
var hong = new UserDTO();
hong.name = "abc";
hong.address = "서울시";
hong.setName("홍길동");
console.log(hong.getName());
//# sourceMappingURL=private.js.map