import { Injectable } from '@nestjs/common';
import { AddBookDto } from './dto/Add-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { writeFile } from 'fs/promises';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ){}
  AddBook(AddBookDto: AddBookDto) {
    const book = this.bookRepository.create(AddBookDto)
    return this.bookRepository.save(book);
  }
  async upload(file : Express.Multer.File, path : string){
    return await writeFile(path,file.buffer)
    
}
  
  async FindAllBooks(){
    return this.bookRepository.find({order:{StartedAt:'DESC'}});
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({id})
  }

  update(id: number, {Conclued_At,Score,Review}: UpdateBookDto) {
    const data:any= []
    if(Conclued_At) data.Conclued_At = Conclued_At
    if(Score) data.Score = Score
    if(Review) data.Review = Review
    
    return this.bookRepository.update(id,data);
  }

  remove(id: number) {
    const book = this.findOne(id)
    this.remove(id)
    return {
      book
    };
  }
}
