import { SubjectColumnName } from 'src/core';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Member } from './member.entity';

@Entity('subjects')
export class Subject {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  content: string;

  @ManyToOne(() => Member, (member) => member.id)
  @JoinColumn({ name: SubjectColumnName.MEMBER_ID })
  member: Member;

  @Column({ type: 'number', name: SubjectColumnName.MEMBER_ID })
  member_id: number;

  @ManyToMany(() => Category, { onUpdate: 'CASCADE' })
  @JoinTable()
  categories: Category[];

  @CreateDateColumn({ type: 'timestamp', name: SubjectColumnName.CREATED_AT })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: SubjectColumnName.UPDATED_AT })
  updatedAt: Date;
}
