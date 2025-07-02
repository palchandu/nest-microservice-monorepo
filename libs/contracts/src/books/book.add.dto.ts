// add validation to book add dto
import { IsString, IsOptional, IsInt, Min } from 'class-validator';
export class BookAddDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  publishedYear?: number;
}
