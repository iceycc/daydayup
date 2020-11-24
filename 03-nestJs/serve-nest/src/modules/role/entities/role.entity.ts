import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';


@Entity('role')
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'title',
    comment: '角色名称'
  })
  title: string;


  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'description',
    comment: '角色描述'
  })
  description: string | null;


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
  updatedAt: Date;
}
