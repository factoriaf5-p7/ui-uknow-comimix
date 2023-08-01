import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsService {
    private readonly commentModule;
    constructor(commentModule: Model<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
}
