/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/task.entity").TaskDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/task.entity").TaskDocument>;
    update(id: string, updateTaskDto: UpdateTaskDto): import("mongoose").Query<import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("./entities/task.entity").TaskDocument> & import("./entities/task.entity").Task & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/task.entity").TaskDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
