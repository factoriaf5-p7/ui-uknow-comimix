import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from  'mongoose';
import { User } from './schemas/user.schema';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { RecoverUserDto } from 'src/auth/dto/recover-user.dto';
import { RecoverRequestDto } from 'src/auth/dto/recover-request.dto';
import { RatedCourseDto } from '../courses/dto/rate-course.dto';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: Model<User>,
	) { }

	async create(user: RegisterUserDto) {
		try{
			const result = await this.userModel.find({ email: user.email });

			if(result.length !== 0){
				return {
					message: 'Error in your request',
					status: HttpStatus.BAD_REQUEST,
					data: ''
				};
			} else {
				await this.userModel.create( user );
				return { 
					message: 'User created succesfully',
					status: HttpStatus.OK,
					data: ''
				};
			}
		}catch(error){
			throw error;
		}
	}

	async addCreatedCourse(userId: ObjectId, courseId: mongoose.Types.ObjectId) {
		try {
			const createdCourse = await this.userModel.findOneAndUpdate({ _id: userId }, 
				{ $push: { created_courses: courseId } }
			);

			if(!createdCourse) throw new HttpException('Error adding new course to user', HttpStatus.NOT_MODIFIED);
			
			this.incrementBalance({ balance: 100, userId: userId });

			return {
				message: 'Created course added successfully',
				status: HttpStatus.OK,
				data: ''
			};
		} catch (error) {
			throw error;
		}
	}

	async findAll() {
		try{
			const users = await this.userModel.find().select('-password -recovery_token').lean().exec();
			return {
				message: 'All users retrieved succesfully',
				status: HttpStatus.OK,
				users: users
			};
		}catch(error){
			throw error;
		}
	}

	async findAllAdmin() {
		try {
			const users = await this.userModel.find();
			return {
				message: 'All users retrieved succesfully',
				status: HttpStatus.OK,
				data: users
			};
			
		} catch (error) {
			throw error;
			
		}
	}

	async findOneLogin(email:string) {
		return await this.userModel.findOne({ email }).select('-recovery_token -__v').lean();
	}

	async findOne(id : ObjectId) {
		try {
			const user = await this.userModel.findOne({ _id: id }).select('-password -recovery_token');
			return {
				message: 'User retrived successfully',
				status: HttpStatus.OK,
				data: user
			};
		} catch (error) {
			throw error;
		}
	}

	async getProfile(user: any) {
		try {
			const findUser = await this.userModel.findOne({ _id: user.sub }).select('-password -recovery_token');
			return {
				message: 'User retrived successfully',
				status: HttpStatus.OK,
				data: findUser
			};
		} catch (error) {
			throw error;
		}
	}

	async findOneAdmin(id : ObjectId) {
		try {
			const user = await this.userModel.findOne({ _id: id });
			return {
				message: 'User retrived successfully',
				status: HttpStatus.OK,
				data: user
			};
		} catch (error) {
			throw error;
		}
	}

	async findOneWithCreatedCourses(id : ObjectId) {
		try {
			const createdCourses = await this.userModel.findOne({ _id: id }).select('created_courses').populate('created_courses');

			return {
				message: 'User with created courses retrived successfully',
				status: HttpStatus.OK,
				data: createdCourses
			};
		} catch (error) {
			throw error;
		}	
	}

	async findOneWithBoughtCourses(id: string){
		
		try {
			const boughtCourses = await this.userModel.findOne({ _id: new mongoose.Types.ObjectId(id) }).select('bought_courses.course_id').populate('bought_courses.course_id').lean().exec();
			
			return {
				message: 'User with bought courses retrived successfully',
				status: HttpStatus.OK,
				data: boughtCourses
			};
			
		} catch (error) {
			throw error;
			
		}
	}

	async update(user: UpdateUserDto) {
		try {
			const updatedUser = await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			});
			return {
				message: 'User updated successfully',
				status: HttpStatus.OK,
				data: updatedUser
			};
		} catch (error) {
			throw error;
		}
	}
	async updateUserByAdmin(user: UpdateUserDto) {
		try {
			const updatedUser = await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			});
			return {
				message: 'User updated successfully',
				status: HttpStatus.OK,
				data: updatedUser
			};
		} catch (error) {
			throw error;
		}
	}

	async updatePassword(user: RecoverUserDto) {
		try {
			await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			}).select('-password -recovery_token');
			return {
				message: 'Password updated successfully',
				status: HttpStatus.OK,
				data: ''
			};
		} catch (error) {
			throw error;
		}
	}

	async updateRecoveryToken(user: RecoverRequestDto) {
		try {
			const userTokenCreated = await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			});
			return {
				message: 'Recovery token created successfully',
				status: HttpStatus.OK,
				data: userTokenCreated
			};
		} catch (error) {
			throw error;
		}
	}

	async findAllBoughtCourses( courseId: ObjectId, fields: object ) {
		try {
			const usersBoughtCoursesTemp = await this.userModel.find({ 'bought_courses.course_id': courseId, 'bought_courses.stars': { $gt: 0 } }); //.populate('bought_courses');	
			const usersBoughtCourses = usersBoughtCoursesTemp.map(user => {
				return user.bought_courses.filter(course => String(course.course_id) === String(courseId));
			});

			return {
				message: 'All bought courses retrieved succesfully',
				status: HttpStatus.OK,
				data: usersBoughtCourses.flat(Infinity)
			}; 	
		} catch (error) {
			throw error;
		}
	}

	async findBoughtCourses( user, filter ) {
		try {
			const usersBoughtCoursesTemp = await this.userModel.find( user, filter ).populate('bought_courses');	
			const usersBoughtCourses = usersBoughtCoursesTemp.map(course => course.bought_courses).flat(1);

			return {
				message: 'All bought courses retrieved succesfully',
				status: HttpStatus.OK,
				data: usersBoughtCourses
			}; 	
		} catch (error) {
			throw error;
		}
	}

	async deleteUserByAdmin(id: ObjectId) {
		try {
			const findUser = await this.userModel.findByIdAndDelete( id );
			if (!findUser) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
			return {
				message: 'User deleted succesfully',
				status: HttpStatus.OK,
				data: ''
			};
		} catch (error) {
			throw error;
		}
	}

	async removeCourseFromBought(id: ObjectId) {
		try {
			await this.userModel.findOneAndUpdate({ _id: id }, {
				$pull: {
					created_courses: id
				}
			});
			return {
				status: HttpStatus.OK,
				message: 'Course removed from bought successfully',
				data: ''
			};
		} catch (error) {
			throw error;
		}
	}
	
	async addRating(userId: ObjectId, ratedCourse: RatedCourseDto) {
		try {
			const updatedUser = await this.userModel.findOneAndUpdate({ '_id': userId, 'bought_courses.course_id': ratedCourse._id  }, {
				$set: { 'bought_courses.$.stars': ratedCourse.stars }
			}).select('bought_courses');
			if(!updatedUser) throw new HttpException('Failed rating course', HttpStatus.BAD_REQUEST);

			return {
				message: 'Course rated successfully',
				status: HttpStatus.OK,
				data: updatedUser.bought_courses
			};
		} catch (error) {
			throw error;
		}
	}

	async updateUserBoughtCourses(user: any , course: any) {
		user.bought_courses.push({
			course_id: course.course_id,
			stars: 0,
			commented: false,
		});
		const update = {
			...user
		  };

		  return this.userModel.findOneAndUpdate(user._id, update);
	}

	async incrementBalance(userBalanceDto: any) {
		const user = await this.userModel.findOneAndUpdate(new mongoose.Types.ObjectId(userBalanceDto.userId) ,
			{
				$inc: { wallet_balance: userBalanceDto.balance }
			});
		return user;
	}

	async udpateBalance(userBalanceDto: any) {
		const user = await this.userModel.findOneAndUpdate(new mongoose.Types.ObjectId(userBalanceDto.userId) ,
			{
				wallet_balance: userBalanceDto.balance
			});
		return user;
	}

	async updateCommentedCourse (createCommentDto: CreateCommentDto) {
		try {
			await this.userModel.findOneAndUpdate({ 
				'_id': createCommentDto.user_id, 
				'bought_courses.course_id': createCommentDto.course_id },
			{
				$set: { 'bought_courses.$.commented': true }
			}
				 );
		} catch (error) {
			throw error;
		}
	}
}
