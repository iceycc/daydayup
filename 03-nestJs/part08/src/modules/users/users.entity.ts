import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToMany } from "typeorm";
import { UsersExtendEntity } from "./usersExtend.entity";
import { PostEntity } from "../posts/posts.entity";
import { RoleEntity } from "../role/role.entity";

@Entity({ name: 'users' })
export class UsersEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    })
    id: number

    @Column({
        type: 'varchar',
        name: 'username',
        unique: true, //唯一的
        nullable: false, // 是否可以为null
        length: 50,
        comment: '用户名'
    })
    username: string



    @Column({
        type: 'varchar',
        name: 'password',
        nullable: false,
        comment: '密码'
    })
    password: string

    @Column({
        type:'varchar',
        length:50,
        name:'email',
        comment: '邮箱'
    })
    email:string

    @Column({
        type: 'tinyint',
        default: () => 0,
        name: 'is_del',
        comment: '是否已经删除,1已经删除，0正常'
    })
    isDel: number

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: '创建时间'
    })
    createdAt: Date

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        comment: '更新时间'
    })
    updatedColumn: Date

    @OneToOne(type=>UsersExtendEntity,usersExtend=>usersExtend.user)
    userDetail:UsersExtendEntity

    @OneToMany(type=>PostEntity,post=>post.user)
    posts:PostEntity[]

    @ManyToMany(type=>RoleEntity,role=>role.user)
    roles:RoleEntity[]
}