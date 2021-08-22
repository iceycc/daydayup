import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('access')
export class AccessEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
    length: 50,
    name: 'module_name',
    comment: '模块名称'
  })
  moduleName: string | null;

  @Column({
    type: 'tinyint',
    nullable: true,
    name: 'type',
    comment: '类型,模块顶级模块: 1, 表示菜单: 2, 操作: 3'
  })
  type: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
    length: 100,
    name: 'action_name',
    comment: '操作名称'
  })
  actionName: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
    name: 'icon',
    comment: '小图标'
  })
  icon: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
    name: 'url',
    comment: 'url地址'
  })
  url: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 10,
    name: 'method',
    comment: '请求方式'
  })
  method: string | null;

  @Column({
    type: 'int',
    nullable: false,
    default: () => -1,
    name: 'module_id',
    comment: '父模块id'
  })
  moduleId: number;

  @Column({
    type: 'int',
    nullable: false,
    default: () => 1,
    name: 'sort',
    comment: '排序'
  })
  sort: number;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
    name: 'description',
    comment: '描素'
  })
  description: string | null;

  @Exclude()
  @Column({
    type: 'tinyint',
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
