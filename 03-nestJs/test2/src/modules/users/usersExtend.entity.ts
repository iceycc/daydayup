import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { UsersEntity } from "./users.entity";
@Entity({name:'usersExtend'})
export class UsersExtendEntity{
    @PrimaryGeneratedColumn({
        type:'int',
        name:'id',
        comment:'主键id'

    })
    id:number

    @Column({
        type:'varchar',
        name:'moble',
        length:11,
        nullable:true,
        comment:'手机号'
    })
    mobile:number

    @Column({
        type:'varchar',
        name:'address',
        length:100,
        nullable:true,
        comment:'地址'
    })
    address:string

    @Column({
        type:'tinyint',
        name:'gender',
        comment:'性别:0男，1女'
    })
    gender:number

    @CreateDateColumn({
        type:'timestamp',
        name:'created_at',
        comment:'创建时间'
    })
    created_at:Date
    
    @UpdateDateColumn({
        type:'timestamp',
        name:'update_at',
        comment:'更新时间'
    })
    update_at:Date

    // @Column({
    //     type:'int',
    //     name:'userId',
    //     comment:'对应的userid',
    // })
    // userId:number
    
    @OneToOne(type=>UsersEntity,user=>user.userDetail)
    @JoinColumn()
    user:UsersEntity
}
