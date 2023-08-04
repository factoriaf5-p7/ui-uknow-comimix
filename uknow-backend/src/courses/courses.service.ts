import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model, ObjectId } from 'mongoose';
import { UsersService } from '../users/users.service';
import { RatedCourseDto } from './dto/rate-course.dto';
import { PurchaseCourseDto } from './dto/buy-course.dto';
import mongoose from 'mongoose';
import { DeleteCourseDto } from './dto/delete-course.dto';

@Injectable()
export class CoursesService {
	prototype(prototype: any, arg1: string) {
		throw new Error('Method not implemented.');
	}
	constructor(
    private readonly userService: UsersService,
    @InjectModel(Course.name) private courseModel: Model<Course>,
	) {}

	async create(userId: ObjectId, createCourseDto: CreateCourseDto) {
		try {
			const newCourse = await this.courseModel.create(createCourseDto);
			this.userService.addCreatedCourse(userId, newCourse._id);

			return {
				message: 'New course created successfully.',
				status: HttpStatus.OK,
				data: newCourse,
			};
		} catch (error) {
			throw error;
		}
	}

	async findAll() {
		try {
			const allCourses = await this.courseModel.find();

			return {
				message: 'All courses retrieved successfully',
				status: HttpStatus.OK,
				data: allCourses,
			};
		} catch (error) {
			throw error;
		}
	}

	async findBoughtCourses(id: string) {
		try {
			const { message, status, data } = await this.userService.findOneWithBoughtCourses(id);
	
			const boughtCourses = [];

			if(data.bought_courses.length !== 0){
				const entries = Object.entries(data.bought_courses);

				entries.forEach(course => { 
					boughtCourses.push({ _id: course[1].course_id['_id'], name: course[1].course_id.name });
				});
			}

			return {
				message: 'Retrieved all courses purchased by user successfully',
				status: HttpStatus.OK,
				data: boughtCourses
			};
		} catch (error) {
			throw error;
		}
	}

	async calculateCoursePrice(userId: ObjectId, courseDto: RatedCourseDto) {
		try {
			const { data } = await this.userService.findAllBoughtCourses( courseDto._id, { bought_courses: 1, _id: 0 });
			if(data.length < 5 && courseDto.stars < 5){
				courseDto.stars = 4.8;
				await this.userService.addRating(userId, courseDto);
				return;
			} else {
				await this.userService.addRating(userId, courseDto);
				let average = 0;
				data.map(course => {
					average += course['stars'];
				});
				average = average / data.length;
				if(average < 3){
					const course = await this.courseModel.findOne({ _id: courseDto._id });
					const newPrice = (course.price - ((course.price * 10) / 100));
					await this.courseModel.findOneAndUpdate({ _id: courseDto._id }, {
						$set: { price: newPrice }
					});
				}
				return;
			}
		} catch (error) {
			throw error;
		}
	}

	async addRating(userId: ObjectId, ratedCourse: RatedCourseDto) {
		try {
			const { data, message, status } = await this.userService.addRating(
				userId,
				ratedCourse,
			);

			if(data){
				await this.calculateCoursePrice(userId, ratedCourse);
			}

			return {
				message: 'Course rated successfully',
				status: HttpStatus.OK,
				data: data,
			};
		} catch (error) {
			throw error;
		}
	}

	async searchAdmin(filters: string, keywords: string){
		try {
			let allCourses = [];
			const arrFilters = filters.split(',');
			let regex;
			
			for await (const filter of arrFilters) {
				if (filter !== 'price'){
					regex = new RegExp(keywords, 'i');
				} else if(!isNaN(+keywords)) {
					regex = +keywords;
				}
				allCourses.push(...await this.courseModel.find({ [filter] : regex }));
			}

			allCourses = allCourses.flat(Infinity);

			const hash = {};
			const filteredCourses = allCourses.filter(course =>{
				return hash[course._id] ? false : hash[course._id] = true;
			});

			return {
				message: 'Retrieved filtered courses successfully',
				status: HttpStatus.OK,
				data: filteredCourses
			};
		} catch (error) {
			throw error;
		}
	}

	async findAllSortedByAverage() {
		try {
			const allCourses = await this.courseModel.find().select('-content -bought -__v').lean().exec();
			const { data } = await this.userService.findBoughtCourses({}, { bought_courses: 1, _id: 0 });
			
			const ratedCourses = allCourses.map(course => {
				const newCourse = {
					...course,
					numRatings: 0,
					rating: 0,
					average: 0
				};

				data.forEach(bCourse => {
					let ratings = 0;
					if(String(course._id) === String(bCourse.course_id)){
						newCourse.rating += bCourse.stars;
						newCourse.numRatings++;
					}
				});
				
				if(newCourse.numRatings !== 0){
					newCourse.average = newCourse.rating / newCourse.numRatings;
				}

				return newCourse;
			});

			const sortedCourses = ratedCourses.sort((a, b) => b.average - a.average);

			return {
				message: 'Retrieved all courses succesfully',
				status: 200,
				data: sortedCourses,
			};
		} catch (error) {
			throw error;
		}
	}

	async findCreatedCourses(userId: ObjectId) {
		try{
			const { data, message, status } =
		await this.userService.findOneWithCreatedCourses(userId);

			const createdCourses = [];

			const entries = Object.entries(data.created_courses);
			entries.forEach((course) => {
				createdCourses.push({ _id: course[1]._id, name: course[1].name });
			});

			return {
				message: 'Retrieved all created courses successfully',
				status: HttpStatus.OK,
				data: createdCourses,
			};
		}catch(error) {
			throw error;
		}
	}

	async findCoursesCollectionById(courseId: ObjectId[]) {
		return await Promise.all(
			courseId.map(
				async (courseId) => await this.courseModel.findById(courseId),
			),
		);
	}

	async search(filters: string, keywords: string) {
		try {
			let allCourses = [];
			let regex;
			const arrFilters =  filters.split(',');

			for await (const filter of arrFilters) {
				if (filter !== 'price'){
					regex = new RegExp(keywords, 'i');
				} else if(!isNaN(+keywords)) {
					regex = +keywords;
				}
				allCourses.push(...await this.courseModel.find({ [filter] : regex }));
			}

			allCourses = allCourses.flat(Infinity);

			const hash = {};
			const filteredCourses = allCourses.filter((course) => {
				return hash[course._id] ? false : (hash[course._id] = true);
			});

			return {
				message: 'Retrieved filtered courses successfully',
				status: HttpStatus.OK,
				data: filteredCourses,
			};
		} catch (error) {
			throw error;
		}
	}

	async findOne(id: ObjectId) {
		try {
			const course = await this.courseModel.findById(id);
			return {
				message: 'Course retrieved successfully',
				status: HttpStatus.OK,
				data: course,
			};
		} catch (error) {
			throw error;
		}
	}

	async findOneAdmin(id: ObjectId) {
		try {
			const course = await this.courseModel.findById(id);
			return {
				message: 'Course retrieved successfully',
				status: HttpStatus.OK,
				data: course
			};
			
		} catch (error) {
			throw error;
			
		}
	}

	async update(id: ObjectId, updateCourse: UpdateCourseDto) {
		try {
			const { data, message, status } = await this.userService.findOne(id);
			
			const entries = Object.entries(data.created_courses).flat(Infinity);
			let courseUpdated;
			let isOwner = false;

			entries.forEach(course => {
				if (String(updateCourse._id) === String(course._id)) isOwner = true;
			});

			if(isOwner){
				courseUpdated = await this.courseModel.findOneAndUpdate(
					{ _id: updateCourse._id },
					{ ...updateCourse },
				);
			} else {
				throw new HttpException('Course not found', HttpStatus.BAD_REQUEST);
			}

			return {
				message: 'Course updated successfully',
				status: HttpStatus.OK,
				data: courseUpdated,
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteCourse(deleteCourseDto: DeleteCourseDto) {
		try {
			const course = await this.courseModel.findOne({ _id: deleteCourseDto._id });

			if (course) {
				if (course.bought)
					throw new HttpException(
						'Course cannot be deleted.',
						HttpStatus.UNAUTHORIZED,
					);
				
				const courseDeleted = await this.userService.removeCourseFromBought(deleteCourseDto.userId);
				if(courseDeleted) await this.courseModel.deleteOne({ _id: deleteCourseDto._id });

				return {
					message: 'Course deleted.',
					status: HttpStatus.OK,
					data: '',
				};
			} else {
				throw new HttpException('Course not found.', HttpStatus.NOT_FOUND);
			}
		} catch (error) {
			throw error;
		}
	}
	async findAllSortedByPriceDesc() {
		try {
			const coursesByPrice = await this.courseModel.find().sort({ price: -1 });
			return {
				message: 'All courses retrieved successfully',
				status: HttpStatus.OK,
				data: coursesByPrice,
			};
		} catch (error) {
			throw error;
		}
	}

	async removeCourseFromBought(id: ObjectId) {
		try {
			await this.userService.removeCourseFromBought(id);
		} catch (error) {
			throw error;
		}
	}

	async deleteCourseByAdmin(id: ObjectId) {
		try {
			const course = await this.courseModel.findOne({ _id: id });
			if (course) {
				await this.removeCourseFromBought(id);
				await this.courseModel.deleteOne({ _id: id });
				return {
					message: 'Course deleted by admin',
					status: HttpStatus.OK,
					data: '',
				};
			} else {
				throw new HttpException('Course not found.', HttpStatus.NOT_FOUND);
			}
		} catch (error) {
			throw error;
		}
	}

	async purchaseCourse(purchaseCourseDto: PurchaseCourseDto) {
		try{
			const user = (await this.userService.findOne(purchaseCourseDto.userId)).data;
			const course = await this.courseModel.findOne({ _id: purchaseCourseDto.courseId });
			
			if (user.wallet_balance < course.price) {
				throw new HttpException('INSUFFICIENT_BALANCE', HttpStatus.FORBIDDEN);
			} else {
				if (!course.bought) {
					await this.courseModel.findOneAndUpdate({ _id: course._id },{ bought: true });
				}
				user.wallet_balance -= course.price;
				const object = {
					course_id: course._id,
					stars: 0,
					commented: false
				};
				await this.userService.updateUserBoughtCourses(user, object);

				return {
					message: 'Course purchased.',
					status: HttpStatus.OK,
					data: ''
				};
			}
		}catch (error){
			throw error;
		}
	}
}
