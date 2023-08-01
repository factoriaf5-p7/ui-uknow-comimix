import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UsersService } from 'src/users/users.service';
import { CoursesService } from 'src/courses/courses.service';

@Injectable()
export class CommentsService {
	constructor(@InjectModel(Comment.name) private commentModule: Model<Comment>,
    private userService: UsersService,
    private courseService: CoursesService
	){}

	async create(createCommentDto: CreateCommentDto) {
		try {
			const { data } = await this.courseService.findOne(createCommentDto.course_id);
			if(!data) throw new HttpException('Course doesn\'t exists', HttpStatus.BAD_REQUEST);

			const createdComment = await this.commentModule.create( createCommentDto );

			if(createdComment) {
				await this.userService.updateCommentedCourse(createCommentDto);
			}

			return {
				status: HttpStatus.OK,
				message: 'Comment created successfully',
				data: ''
			};
		} catch (error) {
			throw error;
		}
	}

	async findAll() {
		try {
			const allComments = await this.commentModule.find();
			return {
				status: HttpStatus.OK,
				message: 'All comments retrieved successfully',
				data: allComments
			};
		} catch (error) {
			throw error;
		}
	}

	async findComments(courseId: ObjectId) {
		try {
			const comments = await this.commentModule.find({ course_id: courseId });
			return {
				status: HttpStatus.OK,
				message: 'All comments retrieved successfully',
				data: comments
			};
		} catch (error) {
			throw error;
		}
	}

	// update(id: number, updateCommentDto: UpdateCommentDto) {
	// 	return `This action updates a #${id} comment`;
	// }

	// remove(id: number) {
	// 	return `This action removes a #${id} comment`;
	// }
}
