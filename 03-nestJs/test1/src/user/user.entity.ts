import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { UserExtend } from "./userExtend.entity";
import { Posts } from "../post/post.entity";

@Entity({ name: 'user' })
export class UserEntity {
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
        unique: true,// ?
        name: 'username', // 如果一致的话可以不指定
        comment: '用户名'
    })
    username: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        comment: '密码'
    })
    password: string;

    @Column('tinyint', {
        nullable: false,
        default: () => 0,
        name: 'is_del',
        comment: '是否删除，1表示删除，0表示正常'
    })
    isDel: number;

    @CreateDateColumn({
        type: 'timestamp',
        nullable: false,
        name: 'created_at',
        comment: '创建时间'
    })
    createdAt: Date

    @UpdateDateColumn({
        type: "timestamp",
        nullable: false,
        name: 'update_at',
        comment: '创建时间'
    })
    updateAt: Date

    @OneToOne(type => UserExtend, userExtend => userExtend.user)
    userDetail: UserExtend

    // 一对多,自然Posts实体类中就是多对一的方式
    // post => post.user表示从post表中查询到user数据
    @OneToMany(type => Posts, post => post.user)
    posts: Posts[]
}
