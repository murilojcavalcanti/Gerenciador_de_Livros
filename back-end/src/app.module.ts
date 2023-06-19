import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.env'
  }),
  TypeOrmModule.forRoot({
    type:'mysql',
    database:process.env.DB_NAME,
    port:3306,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    entities:[Book],
    synchronize:true,
  }),
  BooksModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
