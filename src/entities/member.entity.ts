import { MemberColumnName } from 'src/core/enum';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Subject } from './subject.entity';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: MemberColumnName.PSEUDO, unique: true })
  pseudo: string;

  @Column({ type: 'varchar', name: MemberColumnName.EMAIL, unique: true })
  email: string;

  @Column({ type: 'varchar', name: MemberColumnName.PASSWORD })
  password: string;

  @Column({ type: 'boolean', name: MemberColumnName.IS_ADMIN })
  isAdmin: boolean;

  @OneToMany(() => Subject, (subject) => subject.member_id)
  subjects: Subject[];

  @CreateDateColumn({ type: 'timestamp', name: MemberColumnName.CREATED_AT })
  createdAt: Date;
}
