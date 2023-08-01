import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ObjectId } from 'mongoose';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<void>;
    findAll(): string;
    findOne(id: ObjectId): string;
}
