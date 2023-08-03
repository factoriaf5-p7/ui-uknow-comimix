import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ObjectId } from 'mongoose';
import { RatedCourseDto } from './dto/rate-course.dto';
import { PurchaseCourseDto } from './dto/buy-course.dto';
import mongoose from 'mongoose';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    purchaseCourse(purchaseCourseDto: PurchaseCourseDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: string;
    }>;
    update(userId: ObjectId, updateCourseDto: UpdateCourseDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: any;
    }>;
    create(userId: ObjectId, createCourseDto: CreateCourseDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: mongoose.Document<unknown, {}, import("./schemas/course.schema").Course> & Omit<import("./schemas/course.schema").Course & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    showCreatedCourses(userId: ObjectId): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: any[];
    }>;
    deleteCourse(id: ObjectId): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: string;
    }>;
    deleteCourseByAdmin(id: ObjectId): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: string;
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
    findAllSortedByPriceDesc(): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: (mongoose.Document<unknown, {}, import("./schemas/course.schema").Course> & Omit<import("./schemas/course.schema").Course & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    findAll(): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: (mongoose.Document<unknown, {}, import("./schemas/course.schema").Course> & Omit<import("./schemas/course.schema").Course & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    findBoughtCourses(userId: string): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: any[];
    }>;
    search(query: any): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: any[];
    }>;
    searchAdmin(query: any): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: any[];
    }>;
    findOne(id: ObjectId): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: mongoose.Document<unknown, {}, import("./schemas/course.schema").Course> & Omit<import("./schemas/course.schema").Course & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    findOneAdmin(id: ObjectId): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: mongoose.Document<unknown, {}, import("./schemas/course.schema").Course> & Omit<import("./schemas/course.schema").Course & {
            _id: mongoose.Types.ObjectId;
        }, never>;
    }>;
    addRating(userId: ObjectId, ratedCourse: RatedCourseDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: {
            course_id: import("./schemas/course.schema").Course;
            stars: number;
            commented: boolean;
        }[];
    }>;
}
