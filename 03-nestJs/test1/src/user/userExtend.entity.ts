import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'user_extend_2' })
export class UserExtend {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 11,
    nullable: true,
    name: 'mobile',
    comment: '手机号码',
  })
  mobile: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'email',
    comment: 'email',
  })
  email: string;


  @Column({
    type: 'varchar',
    length: 11,
    nullable: true,
    name: 'qq',
    comment: 'qq',
  })
  qq:string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'address',
    comment: '地址',
  })
  address: string

  @Column({
      type:"varchar",
      length:6,
      nullable:true,
      name:"gender",
      comment:"性别"
  })
  gender:string
//   @Column({
//     type: 'int',
//     name: 'userId',
//     comment: '地址',
//   })
//   userId: number

  // 使用@OneToOne装饰允许我们在两个实体之间创建一对一的关系
  @OneToOne(type => UserEntity,user=>user.userDetail)
  // @JoinColumn装饰器，表明实体键的对应关系
  @JoinColumn()
  user: UserEntity
}