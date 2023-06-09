"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentContoller = void 0;
const common_1 = require("@nestjs/common");
let StudentContoller = exports.StudentContoller = class StudentContoller {
    addStudentInfo() {
        return 'add StudentInfo';
    }
    deletestutudent() {
        return 'delete stutudent information';
    }
    updatestutudent() {
        return ' update stutudent information';
    }
    findallstutudent() {
        return ' find all stutudent information';
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentContoller.prototype, "addStudentInfo", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentContoller.prototype, "deletestutudent", null);
__decorate([
    (0, common_1.Put)('/update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentContoller.prototype, "updatestutudent", null);
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentContoller.prototype, "findallstutudent", null);
exports.StudentContoller = StudentContoller = __decorate([
    (0, common_1.Controller)('StudentInfo')
], StudentContoller);
//# sourceMappingURL=app.controller.js.map