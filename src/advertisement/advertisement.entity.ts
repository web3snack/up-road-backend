import { CommonEntity } from 'src/common/entity/common.entity';
import { ArticleEntity } from 'src/article/entity/article.entity';
import { UserEntity } from 'src/user/user.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('advertisement')
export class AdvertisementEntity extends CommonEntity {
  @ManyToOne(
    () => ArticleEntity,
    (ArticleEntity) => {
      ArticleEntity.id;
    },
  )
  @JoinColumn()
  article: ArticleEntity;

  @ManyToOne(
    () => UserEntity,
    (UserEntity) => {
      UserEntity.id;
    },
  )
  @JoinColumn()
  user: UserEntity;

  @Column()
  title: string;

  @Column()
  current_price: number;

  @Column()
  link: string;
}
