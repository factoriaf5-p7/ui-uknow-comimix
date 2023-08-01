import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    	text: string;
    
    @IsNotEmpty()
    	user_id: ObjectId;

    @IsNotEmpty()
    	course_id: ObjectId;
}
