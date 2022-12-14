import { CommonEntity } from 'src/common/entity/common.entity';
import { Entity, Column } from 'typeorm';

@Entity('user')
export class UserEntity extends CommonEntity {
  @Column()
  account_address: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  profile_image: string;

  @Column({ nullable: true })
  description: string;
}
