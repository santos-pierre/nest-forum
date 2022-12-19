import { CategoryColumnName } from 'src/core/enum/category-column-name.enum';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Subject } from './subject.entity';

@Entity('categories')
export class Category {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', name: CategoryColumnName.NAME, unique: true })
  name: string;

  @ManyToMany(() => Subject, { onUpdate: 'CASCADE' })
  @JoinTable()
  subjects: Subject[];
}
