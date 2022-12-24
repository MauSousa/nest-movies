import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    unique: true,
  })
  movie_name: string;

  @Column('text')
  review: string;

  @Column('smallint')
  score: number;

  @CreateDateColumn()
  created_at: Date;
}
