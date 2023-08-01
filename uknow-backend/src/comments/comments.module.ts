import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';

@Module({
	imports: [
		CommentsModule,
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
