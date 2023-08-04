import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export class DeleteCourseDto {

	@ApiProperty({ example: '64134kjh2h2asd34' })
	@IsNotEmpty()
		_id: ObjectId;

	@ApiProperty({ example: '64134kjh2h2asd34' })
	@IsNotEmpty()
		userId: ObjectId;
	
}
