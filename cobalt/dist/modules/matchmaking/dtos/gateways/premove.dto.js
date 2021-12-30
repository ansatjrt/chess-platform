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
exports.PremoveDto = void 0;
const class_validator_1 = require("class-validator");
const matchmaking_1 = require("../..");
class PremoveDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "Match ID must be type of string" }),
    __metadata("design:type", String)
], PremoveDto.prototype, "matchId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "From must be type of string" }),
    (0, class_validator_1.IsIn)(matchmaking_1.SQUARES, { message: "From must be a square" }),
    __metadata("design:type", String)
], PremoveDto.prototype, "from", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "To must be type of string" }),
    (0, class_validator_1.IsIn)(matchmaking_1.SQUARES, { message: "From must be a square" }),
    __metadata("design:type", String)
], PremoveDto.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Promotion must be type of string" }),
    (0, class_validator_1.IsIn)(matchmaking_1.PROMOTION_PIECES, { message: "Promotion must be a piece" }),
    __metadata("design:type", String)
], PremoveDto.prototype, "promotion", void 0);
exports.PremoveDto = PremoveDto;
//# sourceMappingURL=premove.dto.js.map