import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import {UserEntity} from '../user/user.entity'
import { Tags } from '../tags/tags.entity';
@Entity({ name: 'posts' })
export class Posts {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    })
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50,
        unique: true,
        name: 'title',
        comment: '标题'
    })
    title: string;

    @Column({
        type: 'text',
        nullable: true,
        name: 'content',
        comment: '内容'
    })
    content: string;

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

    @ManyToOne(type => UserEntity, user => user.posts)
    user: UserEntity

    @ManyToMany(type => Tags, tag=>tag.posts)
    tags:Tags[]
}