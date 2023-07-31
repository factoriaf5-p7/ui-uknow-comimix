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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
let UsersService = exports.UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(user) {
        try {
            const result = await this.userModel.find({ email: user.email });
            if (result.length !== 0) {
                return {
                    message: 'Error in your request',
                    status: common_1.HttpStatus.BAD_REQUEST,
                    data: ''
                };
            }
            else {
                await this.userModel.create(user);
                return {
                    message: 'User created succesfully',
                    status: common_1.HttpStatus.OK,
                    data: ''
                };
            }
        }
        catch (error) {
            throw error;
        }
    }
    async addCreatedCourse(userId, courseId) {
        try {
            await this.userModel.findOneAndUpdate({ _id: userId }, { $push: { created_courses: courseId } });
            return {
                message: 'Created course added successfully',
                status: common_1.HttpStatus.OK,
                data: ''
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            const users = await this.userModel.find().select('-password -recovery_token').lean().exec();
            return {
                message: 'All users retrieved succesfully',
                status: common_1.HttpStatus.OK,
                users: users
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findAllAdmin() {
        try {
            const users = await this.userModel.find();
            return {
                message: 'All users retrieved succesfully',
                status: common_1.HttpStatus.OK,
                data: users
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findOneLogin(email) {
        return await this.userModel.findOne({ email });
    }
    async findOne(id) {
        try {
            const user = await this.userModel.findOne({ _id: id }).select('-password -recovery_token');
            return {
                message: 'User retrived successfully',
                status: common_1.HttpStatus.OK,
                data: user
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getProfile(user) {
        return await this.userModel.findOne({ email: user.email });
    }
    async findOneAdmin(id) {
        try {
            const user = await this.userModel.findOne({ _id: id });
            return {
                message: 'User retrived successfully',
                status: common_1.HttpStatus.OK,
                data: user
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findOneWithCreatedCourses(id) {
        try {
            const createdCourses = await this.userModel.findOne({ _id: id }).select('created_courses').populate('created_courses');
            console.log('created', createdCourses);
            return {
                message: 'User with created courses retrived successfully',
                status: common_1.HttpStatus.OK,
                data: createdCourses
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findOneWithBoughtCourses(id) {
        try {
            console.log(typeof id);
            const boughtCourses = await this.userModel.findOne({ _id: new mongoose_2.default.Types.ObjectId(id) }).select('bought_courses.course_id').populate('bought_courses.course_id').lean().exec();
            console.log('bought findonewith bought', boughtCourses.bought_courses[0].course_id);
            return {
                message: 'User with bought courses retrived successfully',
                status: common_1.HttpStatus.OK,
                data: boughtCourses
            };
        }
        catch (error) {
            throw error;
        }
    }
    async update(user) {
        try {
            const updatedUser = await this.userModel.findOneAndUpdate({ _id: user._id }, Object.assign({}, user));
            return {
                message: 'User updated successfully',
                status: common_1.HttpStatus.OK,
                data: updatedUser
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserByAdmin(user) {
        try {
            const updatedUser = await this.userModel.findOneAndUpdate({ _id: user._id }, Object.assign({}, user));
            return {
                message: 'User updated successfully',
                status: common_1.HttpStatus.OK,
                data: updatedUser
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updatePassword(user) {
        try {
            await this.userModel.findOneAndUpdate({ _id: user._id }, Object.assign({}, user)).select('-password -recovery_token');
            return {
                message: 'Password updated successfully',
                status: common_1.HttpStatus.OK,
                data: ''
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateRecoveryToken(user) {
        try {
            const userTokenCreated = await this.userModel.findOneAndUpdate({ _id: user._id }, Object.assign({}, user));
            return {
                message: 'Recovery token created successfully',
                status: common_1.HttpStatus.OK,
                data: userTokenCreated
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findAllBoughtCourses(user, filter) {
        try {
            const usersBoughtCoursesTemp = await this.userModel.find(user, filter).populate('bought_courses');
            const usersBoughtCourses = usersBoughtCoursesTemp.map(course => course.bought_courses).flat(1);
            return {
                message: 'All bought courses retrieved succesfully',
                status: common_1.HttpStatus.OK,
                data: usersBoughtCourses
            };
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUserByAdmin(id) {
        try {
            const findUser = await this.userModel.findByIdAndDelete(id);
            if (!findUser)
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            return {
                message: 'User deleted succesfully',
                status: common_1.HttpStatus.OK,
                data: ''
            };
        }
        catch (error) {
            throw error;
        }
    }
    async removeCourseFromBought(id) {
        try {
            return {
                status: common_1.HttpStatus.OK,
                message: 'Course removed from bought successfully',
                data: ''
            };
        }
        catch (error) {
            throw error;
        }
    }
    async addRating(userId, ratedCourse) {
        try {
            console.log(ratedCourse._id);
            console.log(await this.userModel.find({ bought_courses: { $elemMatch: { course_id: ratedCourse._id } } }));
            const updatedUser = await this.userModel.findOneAndUpdate({ 'bought_courses.course_id': ratedCourse._id }, {
                'bought_courses.$.stars': ratedCourse.stars
            }).select('bought_courses');
            console.log(updatedUser);
            if (!updatedUser)
                throw new common_1.HttpException('Failed rating course', common_1.HttpStatus.BAD_REQUEST);
            return {
                message: 'Course rated successfully',
                status: common_1.HttpStatus.OK,
                data: updatedUser.bought_courses
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserBoughtCourses(userId, course) {
        const update = {
            $push: {
                bought_courses: {
                    course_id: course.course_id,
                    stars: 0,
                    commented: false,
                },
            },
        };
        return this.userModel.findOneAndUpdate(userId, update);
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map