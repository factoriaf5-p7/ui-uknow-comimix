import { HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';
import { Model, ObjectId } from 'mongoose';
import { UsersService } from '../users/users.service';
import { RatedCourseDto } from './dto/rate-course.dto';
import { PurchaseCourseDto } from './dto/buy-course.dto';
import mongoose from 'mongoose';
export declare class CoursesService {
    private readonly userService;
    private courseModel;
    prototype(prototype: any, arg1: string): void;
    constructor(userService: UsersService, courseModel: Model<Course>);
    create(userId: ObjectId, createCourseDto: CreateCourseDto): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, Course> & Omit<Course & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    findAll(): Promise<{
        message: string;
        status: HttpStatus;
        data: (mongoose.Document<unknown, {}, Course> & Omit<Course & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    findBoughtCourses(id: string): Promise<{
        message: string;
        status: HttpStatus;
        data: any[];
    }>;
    calculateCoursePrice(courseDto: RatedCourseDto): Promise<void>;
    addRating(userId: ObjectId, ratedCourse: RatedCourseDto): Promise<{
        message: string;
        status: HttpStatus;
        data: {
            course_id: Course;
            stars: number;
            commented: boolean;
        }[];
    }>;
    searchAdmin(filters: string, keywords: string): Promise<{
        message: string;
        status: HttpStatus;
        data: any[];
    }>;
    findAllSortedByAverage(): Promise<{
        message: string;
        status: number;
        data: {
            numRatings: number;
            rating: number;
            average: number;
            name: string;
            price: number;
            topic: string;
            difficulty: string;
            tags: [];
            bought: boolean;
            content: string;
            image: string;
            description: string;
            _id: mongoose.Types.ObjectId;
        }[];
    }>;
    findCreatedCourses(userId: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: any[];
    }>;
    findCoursesCollectionById(courseId: ObjectId[]): Promise<(mongoose.Document<unknown, {}, Course> & Omit<Course & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
    search(filters: string, keywords: string): Promise<{
        message: string;
        status: HttpStatus;
        data: any[];
    }>;
    findOne(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, Course> & Omit<Course & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    findOneAdmin(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: mongoose.Document<unknown, {}, Course> & Omit<Course & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    update(id: ObjectId, updateCourse: UpdateCourseDto): Promise<{
        message: string;
        status: HttpStatus;
        data: any;
    }>;
    deleteCourse(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    findAllSortedByPriceDesc(): Promise<{
        message: string;
        status: HttpStatus;
        data: (mongoose.Document<unknown, {}, Course> & Omit<Course & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    removeCourseFromBought(id: ObjectId): Promise<void>;
    deleteCourseByAdmin(id: ObjectId): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
    purchaseCourse(purchaseCourseDto: PurchaseCourseDto): Promise<{
        message: string;
        status: HttpStatus;
        data: string;
    }>;
}
