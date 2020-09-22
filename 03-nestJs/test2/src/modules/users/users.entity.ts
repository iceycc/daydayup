import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, BeforeInsert } from "typeorm";
import { UsersExtendEntity } from "./usersExtend.entity";
import { PostEntity } from "../posts/posts.entity";
import { RoleEntity } from "../role/role.entity";
import { Exclude, Expose } from "class-transformer";
import NodeAuth from 'node-auth0';
// import * as jwt from "jsonwebtoken" 
@Entity({ name: 'users' })
export class UsersEntity {
    @Exclude()
    private nodeAuth: NodeAuth
    constructor() {
        this.nodeAuth = new NodeAuth();
    }

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


    @Exclude()
    @Column({
        type: 'varchar',
        name: 'password',
        nullable: false,
        length: 100,
        comment: '密码'
    })
    password: string

    @Column({
        type: 'varchar',
        length: 50,
        name: 'email',
        comment: '邮箱'
    })
    email: string

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

    @Expose()
    isDelStr(): string {
        return this.isDel ? '删除' : '正常';
    }

    @OneToOne(type => UsersExtendEntity, usersExtend => usersExtend.user)
    userDetail: UsersExtendEntity

    @OneToMany(type => PostEntity, post => post.user)
    posts: PostEntity[]

    @ManyToMany(type => RoleEntity, role => role.user)
    roles: RoleEntity[]

    @BeforeInsert()
    makePassword(): void {
        this.password = this.nodeAuth.makePassword(this.password)
    }


    // @Expose()
    // private get token() {
    //     const { id, username, } = this;
    //     // 生成签名
    //     return jwt.sign(
    //         {
    //             id,
    //             username,
    //         },
    //         process.env.SECRET, // 加盐
    //         {
    //             expiresIn: '7d', // 过期时间
    //         },
    //     );
    // }

    /**
     * @Description: 定义返回数据,用了这个函数后上面的Exclude和Expose就失效了
     * @param {type} 
     * @return {type} 
     */
    // public toResponseObject(isShowToken = true): { [propsName: string]: any } {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const { nodeAuth, password, token, username, ...params } = this;
    //     const responseData = {
    //         username,
    //         ...params,
    //     }
    //     if (isShowToken) {
    //         return Object.assign(responseData, { token });
    //     } else {
    //         return responseData;
    //     }
    // }
}