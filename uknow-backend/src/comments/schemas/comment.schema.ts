import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
	@ApiProperty({ example: 'Me ha gustado este curso porque lo explica todo minuciosamente.' })
    @Prop({ required: true })
		text: string;

    @ApiProperty({ example: '6asd88fasd8uu8891' })
    @Prop({ required: true })
    	user_id: string;
	
	@ApiProperty({ example: '68ada80asd8fas812' })
	@Prop({ required: true })
		course_id: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);