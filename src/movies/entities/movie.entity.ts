import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    unique: true,
  })
  title: string;

  @Column('text')
  review: string;

  @Column('smallint')
  score: number;

  @CreateDateColumn()
  created_at: Date;

  // @CreateDateColumn()
  // updated_at: Date;
}
