import { CategoryColumnName } from 'src/core/enum/category-column-name.enum';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Subject } from './subject.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: CategoryColumnName.NAME, unique: true })
  name: string;

  @ManyToMany(() => Subject, { onUpdate: 'CASCADE' })
  @JoinTable({ name: 'categories_subjects' })
  subjects: Subject[];
}
