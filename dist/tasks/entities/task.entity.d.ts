import * as mongoose from 'mongoose';
export declare type TaskDocument = Task & Document;
export declare class Task {
    title: string;
    description: string;
}
export declare const TaskSchema: mongoose.Schema<Task, mongoose.Model<Task, any, any, any>, {}, {}>;
