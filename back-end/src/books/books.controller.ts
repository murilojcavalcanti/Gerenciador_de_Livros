import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { AddBookDto } from './dto/Add-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { title } from 'process';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common/decorators'
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: AddBookDto) {

    return this.booksService.AddBook(createBookDto);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/thumb')
  async UploadThumb(@UploadedFile('file') photo: Express.Multer.File){
   const path = join(__dirname,'..','..','storage',`${photo.originalname}`)
   this.booksService.upload(photo,path)
   return {
     path
    } 

  }

  @Get()
  findAll() {
    return this.booksService.FindAllBooks();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
