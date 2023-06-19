import { PartialType } from '@nestjs/mapped-types';
import { AddBookDto } from './Add-book.dto';

export class UpdateBookDto extends PartialType(AddBookDto) {
    
Conclued_At: Date

Review:string

}
