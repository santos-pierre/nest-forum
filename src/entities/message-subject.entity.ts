import { MessageSubjectColumnName } from 'src/core';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Member } from './member.entity';
import { Subject } from './subject.entity';

@Entity('messages_subjects')
export class MessageSubject {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Member, (member) => member.id)
  @JoinColumn({ name: MessageSubjectColumnName.MEMBER_ID })
  member: Member;

  @Column({ name: MessageSubjectColumnName.MEMBER_ID })
  memberID: number;

  @ManyToOne(() => Member, (member) => member.id)
  @JoinColumn({ name: MessageSubjectColumnName.SUBJECT_ID })
  subject: Subject;

  @Column({ name: MessageSubjectColumnName.SUBJECT_ID })
  subjectID: number;

  @CreateDateColumn({ type: 'timestamp', name: MessageSubjectColumnName.CREATED_AT })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: MessageSubjectColumnName.UPDATED_AT })
  updatedAt: Date;
}
