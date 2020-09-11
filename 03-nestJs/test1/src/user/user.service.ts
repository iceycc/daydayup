import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, EntityManager } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserExtend } from './userExtend.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  // 创建数据,传递一个对象类型的数据
  async createUser(data: Extract<any, any>) {
    // return await this.userRepository.save(data);
    console.log('111', data)
    const { name, password, email, mobile, gender, qq, address } = data
    return getManager()
      .transaction(async (entityManage: EntityManager) => {
        const user: { [propName: string]: any } = await entityManage.save(
          UserEntity,
          {
            name,
            password,
          }
        )
        console.log(user)
        await entityManage.save(UserExtend, {
          userId: user.id,
          qq,
          address,
          email,
          mobile,
          gender
        });
      }).then(res => {
        console.log(res)
        return "创建成功"
      }).catch(err => {
        return "创建失败"
      })
  }

  // 查询全部的数据
  async userList(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }


  userList2 = [
    {
      id: 0,
      name: '张三',
      password: '123456',
    }
  ];

  // 添加用户
  addUser(body: { [propsName: string]: any }): string {
    const { name = '', password = '' } = body;
    const newData = {
      name,
      password,
      id: ++this.userList2[this.userList2.length - 1].id
    }
    this.userList2.push(newData);
    return '添加成功'
  }

  // 删除用户
  deleteUserById(id: number): string {
    const index = this.userList2.findIndex(item => item.id === id);
    this.userList2.splice(index, 1);
    return '删除成功';
  }

  // 根据用户id修改数据
  modifyUserById(id: number, body: { [propsName: string]: any }): string {
    // 这个地方仅仅是模拟修改,可能传递过来的name或者password是空的,这里不处理
    const { name, password } = body;
    const index = this.userList2.findIndex(item => item.id === id);
    this.userList2.splice(index, 1, { id, name, password });
    return '修改成功';
  }

  // 查询全部的用户
  list(): any[] {
    return this.userList2;
  }

  // 根据id查询数据
  userById(id: number): { [propsName: string]: any } {
    const item = this.userList2.find(item => item.id === id);
    return item;
  }
}
