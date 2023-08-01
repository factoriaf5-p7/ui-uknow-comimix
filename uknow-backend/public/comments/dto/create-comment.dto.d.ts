import { ObjectId } from 'mongoose';
export declare class CreateCommentDto {
    _id: ObjectId;
    text: string;
    user_id: ObjectId;
    course_id: ObjectId;
}
