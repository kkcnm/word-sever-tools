"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCharsetMiddleware = void 0;
const common_1 = require("@nestjs/common");
let RemoveCharsetMiddleware = class RemoveCharsetMiddleware {
    use(req, res, next) {
        const originalSetHeader = res.setHeader.bind(res);
        res.setHeader = (key, value) => {
            if (key.toLowerCase() === 'content-type' && typeof value === 'string') {
                value = value.split(';')[0];
            }
            return originalSetHeader(key, value);
        };
        next();
    }
};
exports.RemoveCharsetMiddleware = RemoveCharsetMiddleware;
exports.RemoveCharsetMiddleware = RemoveCharsetMiddleware = __decorate([
    (0, common_1.Injectable)()
], RemoveCharsetMiddleware);
//# sourceMappingURL=remove-charset.middleware.js.map