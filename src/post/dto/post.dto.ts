import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}

export class PageDto {
  @IsString()
  // @IsNotEmpty()
  page: number;

  @IsString()
  @IsNotEmpty()
  pageSize: number;
}
