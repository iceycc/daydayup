import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';


@Entity('user_role')
export class UserRoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'user_id',
    comment: '用户id'
  })
  userId: number;


  @Column({
    type: 'int',
    nullable: false,
    name: 'role_id',
    comment: '角色id'
  })
  roleId: number;

}