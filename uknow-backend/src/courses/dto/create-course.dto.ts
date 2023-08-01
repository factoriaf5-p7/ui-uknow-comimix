import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, IsEnum } from 'class-validator';

enum Difficulty {
	Begginer = 'Beginner',
	Medium = 'Medium',
	Advanced = 'Advanced'
}

export class CreateCourseDto {
	@ApiProperty({ example: 'How to validate dtos properties' })
	@IsString()
	@IsNotEmpty()
		name: string;

	@ApiProperty({ example: 'Web development | Backend | Frontend ' })
	@IsString()
	@IsNotEmpty()
		topic: string;

	@ApiProperty({ example: 'Beginner | Intermediate | Advanced' })
	@IsString()
	@IsEnum(Difficulty)
	@IsNotEmpty()
		difficulty: string;
	
	@ApiProperty({ example: '#webdevolopment, #javascript, #css' })
	@IsArray()
	@ArrayMaxSize(3)
		tags: [string, string, string];
	
	@ApiProperty({ example: '### How to validate dtos properties<br>## Class-validator<br>To validate install the package as follow: nmp i class-validator.' })
	@IsString()
	@IsNotEmpty()
		content: string;

	@ApiProperty( { example: 'https://raw.githubusercontent.com/raulalhena/establedifussion/main/1.png' } )
    @IsString()
	@IsNotEmpty()
		image: string;

    @ApiProperty( { example: 'In this course you are to learn how to create a web application using NestJS. The backend is an important piece of the...' } )
    @IsString()
	@IsNotEmpty()
	// eslint-disable-next-line no-mixed-spaces-and-tabs
    		description: string;
}
