import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity('posts')
export class PostsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'title',
    comment: '帖子标题'
  })
  title: string;


  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'content',
    comment: '帖子内容'
  })
  content: string | null;

  @Column({
    type: 'int',
    name: 'user_id',
    comment: '用户id'
  })
  userId: number

  @Column('tinyint', {
    nullable: false,
    default: () => 0,
    name: 'is_del',
    comment: '是否删除,1表示删除,0表示正常'
  })
  isDel: number;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    comment: '创建时间'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: '更新时间',
  })
  updateAt: Date;
}
