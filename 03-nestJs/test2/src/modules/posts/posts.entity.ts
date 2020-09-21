import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { UsersEntity } from '../users/users.entity'
@Entity({name:'posts'})
export class PostEntity {
    @PrimaryGeneratedColumn({
        type:'int',
        name:'id',
        comment:'主键id'
    })
    id:number

    @Column({
        type:'varchar',
        name:'title',
        comment:'标题',
        nullable:false
    })
    title:string

    @Column({
        type:'varchar',
        name:'content',
        length:'255',
        comment:'内容',
        nullable:true
    })
    content:string

    @Column({
        type:'tinyint',
        name:'is_del',
        comment:'是否被删除',
        default:()=>0
    })
    isDel:boolean

    @CreateDateColumn({
        type:'timestamp',
        name:'created_at',
        comment:'创建时间'
    })
    createdAt:Date

    @UpdateDateColumn({
        type:'timestamp',
        name:'update_at',
        comment:'更新时间'
    })
    updateAt:Date

    @ManyToOne(type=>UsersEntity,user=>user.posts)
    user:UsersEntity

}