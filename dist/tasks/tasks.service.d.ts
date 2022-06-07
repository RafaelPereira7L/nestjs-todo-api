/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './entities/task.entity';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    create(createTaskDto: CreateTaskDto): Promise<import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, TaskDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, TaskDocument>;
    update(id: string, updateTaskDto: UpdateTaskDto): import("mongoose").Query<import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, TaskDocument> & Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, TaskDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
