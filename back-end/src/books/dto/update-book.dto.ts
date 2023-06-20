import { PartialType } from '@nestjs/mapped-types';
import { AddBookDto } from './Add-book.dto';

export class UpdateBookDto extends PartialType(AddBookDto) {
    
ended_At: Date

review:string

}
