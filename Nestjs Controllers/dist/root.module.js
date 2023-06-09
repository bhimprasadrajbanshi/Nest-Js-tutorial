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
exports.RootModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users.module");
const orders_module_1 = require("./orders.module");
const chat_module_1 = require("./chat.module");
let RootModule = exports.RootModule = class RootModule {
    constructor() {
        console.log("Root Module");
    }
};
exports.RootModule = RootModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, orders_module_1.OrdersModule, chat_module_1.ChatModule],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], RootModule);
//# sourceMappingURL=root.module.js.map