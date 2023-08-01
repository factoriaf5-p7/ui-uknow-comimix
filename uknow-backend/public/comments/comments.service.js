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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schema_1 = require("./schemas/comment.schema");
const users_service_1 = require("../users/users.service");
const courses_service_1 = require("../courses/courses.service");
let CommentsService = exports.CommentsService = class CommentsService {
    constructor(commentModule, userService, courseService) {
        this.commentModule = commentModule;
        this.userService = userService;
        this.courseService = courseService;
    }
    async create(createCommentDto) {
        try {
            const { data } = await this.courseService.findOne(createCommentDto.course_id);
            if (!data)
                throw new common_1.HttpException('Course doesn\'t exists', common_1.HttpStatus.BAD_REQUEST);
            const createdComment = await this.commentModule.create(createCommentDto);
            if (createdComment) {
                await this.userService.updateCommentedCourse(createCommentDto);
            }
            return {
                status: common_1.HttpStatus.OK,
                message: 'Comment created successfully',
                data: ''
            };
        }
        catch (error) {
            throw error;
        }
    }
    findAll() {
        return this.commentModule.find();
    }
    findOne(id) {
        return `This action returns a #${id} comment`;
    }
};
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        courses_service_1.CoursesService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map