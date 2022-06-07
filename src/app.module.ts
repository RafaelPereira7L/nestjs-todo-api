import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'DATABASE_URL=mongodb+srv://coolt:030603ra@list.kvr17.mongodb.net/?retryWrites=true&w=majority',
    ),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
