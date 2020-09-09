import { Entity, PrimaryGeneratedColumn, Column,ManyToMany ,JoinTable} from 'typeorm';
import { Posts } from '../post/post.entity'
@Entity('tags')
export class Tags {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column({
    type: 'varchar',
    name: 'name',
    nullable: false,
    unique: true,
    comment: 'tag名称'
  })
  name: string;

  @ManyToMany(type => Posts, post => post.tags)
  @JoinTable({ name: 'tags_posts' }) // 可以手动指定中间表明
  posts: Posts[];
}