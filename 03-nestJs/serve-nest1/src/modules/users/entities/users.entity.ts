import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import NodeAuth from 'node-auth0';
// import { jwt } from 'src/utils';
import * as jwt from 'jsonwebtoken';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @Exclude()
  private NodeAuth: NodeAuth;

  constructor() {
    super();
    this.NodeAuth = new NodeAuth();
  }

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number;

  // @Column('varchar', {
  //   nullable: false,
  //   primary: true,
  //   generated: 'uuid',
  //   length: 50,
  //   name: 'uuid',
  //   comment: 'uuid',
  // })
  // uuid: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
    name: 'username',
    comment: '用户名',
  })
  username: string;


  @Exclude() // 查询时不反会给用户
  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    comment: '密码',
  })
  password: string;

  @Column('tinyint', {
    nullable: false,
    default: () => 0,
    name: 'is_del',
    comment: '是否删除,1表示删除,0表示正常',
  })
  isDel: number;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: '更新时间',
  })
  updateAt: Date;

  @Expose() // 根据现有的自动生产新的字段返回给前端
  isDelStr(): string {
    return this.isDel ? '删除' : '正常';
  }

  @BeforeInsert()
  makePassword(): void { // 密码加密
    this.password = this.NodeAuth.makePassword(this.password);
  }

  @Expose()
  private get token() {
    const { id, username } = this;
    // 生产签名
    return jwt.sign({
        id,
        username,
      }, // 加密参数
      process.env.SECRET, // 加盐
      {
        expiresIn: '7d', // 过期时间
      },
    );
  }

}