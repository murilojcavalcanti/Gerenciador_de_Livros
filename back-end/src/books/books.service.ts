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
  
  async FindAllBooks(){
    return this.bookRepository.find({order:{startedAt:'DESC'}});
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({id})
  }

  update(id: number, {ended_At,score,review}: UpdateBookDto) {
    const data:any= []
    if(ended_At) data.Conclued_At = ended_At
    if(score) data.Score = score
    if(review) data.Review = review
    
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
