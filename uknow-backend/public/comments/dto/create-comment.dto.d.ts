import { ObjectId } from 'mongoose';
export declare class CreateCommentDto {
    text: string;
    user_id: ObjectId;
    course_id: ObjectId;
}
