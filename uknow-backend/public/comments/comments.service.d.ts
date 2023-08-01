import { HttpStatus } from '@nestjs/common';
import mongoose, { Model, ObjectId } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UsersService } from 'src/users/users.service';
import { CoursesService } from 'src/courses/courses.service';
export declare class CommentsService {
    private commentModule;
    private userService;
    private courseService;
    constructor(commentModule: Model<Comment>, userService: UsersService, courseService: CoursesService);
    create(createCommentDto: CreateCommentDto): Promise<{
        status: HttpStatus;
        message: string;
        data: string;
    }>;
    findAll(): Promise<{
        status: HttpStatus;
        message: string;
        data: (mongoose.Document<unknown, {}, Comment> & Omit<Comment & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    findComments(courseId: ObjectId): Promise<{
        status: HttpStatus;
        message: string;
        data: (mongoose.Document<unknown, {}, Comment> & Omit<Comment & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
}
