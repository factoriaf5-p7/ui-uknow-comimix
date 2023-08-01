import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { UsersModule } from 'src/users/users.module';
import { CoursesModule } from 'src/courses/courses.module';

@Module({
	imports: [
		UsersModule,
		CoursesModule,
		MongooseModule.forFeature([
			{
				name: Comment.name,
				schema: CommentSchema
			}
		])
	],
	controllers: [ CommentsController ],
	providers: [ CommentsService ]
})
export class CommentsModule {}
