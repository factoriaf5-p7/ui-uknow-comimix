import { HttpStatus } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose, { Model, ObjectId } from 'mongoose';
import { User } from './schemas/user.schema';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { RecoverUserDto } from 'src/auth/dto/recover-user.dto';
import { RecoverRequestDto } from 'src/auth/dto/recover-request.dto';
import { RatedCourseDto } from '../courses/dto/rate-course.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(user: RegisterUserDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    addCreatedCourse(userId: ObjectId, courseId: mongoose.Types.ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    findAll(): Promise<{
        message: string;
        status: HttpStatus;
        users: (mongoose.FlattenMaps<User> & {
            _id: mongoose.Types.ObjectId;
        })[];
    }>;
    findAllAdmin(): Promise<{
        message: string;
        status: HttpStatus;
        data: (mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    findOneLogin(email: string): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findOne(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    getProfile(user: any): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findOneAdmin(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    findOneWithCreatedCourses(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    findOneWithBoughtCourses(id: string): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.FlattenMaps<User> & {
            _id: mongoose.Types.ObjectId;
        };
    }>;
    update(user: UpdateUserDto): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    updateUserByAdmin(user: UpdateUserDto): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    updatePassword(user: RecoverUserDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    updateRecoveryToken(user: RecoverRequestDto): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, User> & Omit<User & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    findAllBoughtCourses(courseId: ObjectId, fields: object): Promise<{
        message: string;
        status: HttpStatus;
        data: FlatArray<{
            course_id: import("../courses/schemas/course.schema").Course;
            stars: number;
            commented: boolean;
        }[], 0 | 1 | -1 | 2 | 3 | 5 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20>[];
    }>;
    findBoughtCourses(user: any, filter: any): Promise<{
        message: string;
        status: HttpStatus;
        data: {
            course_id: import("../courses/schemas/course.schema").Course;
            stars: number;
            commented: boolean;
        }[];
    }>;
    deleteUserByAdmin(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    removeCourseFromBought(id: ObjectId): Promise<{
        status: HttpStatus;
        message: string;
        data: string;
    }>;
    addRating(userId: ObjectId, ratedCourse: RatedCourseDto): Promise<{
        message: string;
        status: HttpStatus;
        data: {
            course_id: import("../courses/schemas/course.schema").Course;
            stars: number;
            commented: boolean;
        }[];
    }>;
    updateUserBoughtCourses(userId: mongoose.Types.ObjectId, course: any): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
}
