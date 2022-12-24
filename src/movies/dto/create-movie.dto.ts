import {
  IsDate,
  IsPositive,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(4)
  review: string;

  @IsPositive()
  @Min(1)
  @Max(5)
  score: number;

  @IsDate()
  updated_at?: Date;
}
