import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { UsersEntity } from "../users/users.entity";

@Entity({ name: 'role' })
export class RoleEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    })
    id: number

    @Column({
        type: 'varchar',
        name: 'rolename',
        comment: '角色名',
        length: 100,
        unique: true
    })
    rolename: string

    @Column({
        type: 'tinyint',
        name: 'is_del',
        comment: '是否删除，0为正常，1为不正常',
        default:()=>0
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
    updateAt: Date


    @ManyToMany(type=>UsersEntity,user=>user.roles)
    @JoinTable({name:'user_role'})
    user:UsersEntity[]
}