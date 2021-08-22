import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  userList = [
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
      id: ++this.userList[this.userList.length - 1].id
    }
    this.userList.push(newData);
    return '添加成功'
  }

  // 删除用户
  deleteUserById(id: number): string {
    const index = this.userList.findIndex(item => item.id === id);
    this.userList.splice(index, 1);
    return '删除成功';
  }

  // 根据用户id修改数据
  modifyUserById(id: number, body: { [propsName: string]: any }): string {
    // 这个地方仅仅是模拟修改,可能传递过来的name或者password是空的,这里不处理
    const { name, password } = body;
    const index = this.userList.findIndex(item => item.id === id);
    this.userList.splice(index, 1, { id, name, password });
    return '修改成功';
  }

  // 查询全部的用户
  list(): any[] {
    return this.userList;
  }

  // 根据id查询数据
  userById(id: number): { [propsName: string]: any } {
    const item = this.userList.find(item => item.id === id);
    return item;
  }
}
