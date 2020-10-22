import { Injectable } from '@nestjs/common';
import NodeAuth from 'node-auth0';

@Injectable()
export class ToolsService {
  private nodeAuth: NodeAuth;

  constructor () {
    this.nodeAuth = new NodeAuth();
  }

  /**
   * @Description: 传递一个密码过来进行加密
   * @param {type}
   * @return {type}
   */
  makePassword(password: string): string {
    return this.nodeAuth.makePassword(password);
  }

  /**
   * @Description: 校验密码是否正确
   * @param password {string} 明文
   * @param sqlPassword {string} 数据库中加密后的密码
   */
  checkPassword(password: string, sqlPassword: string): boolean {
    return this.nodeAuth.checkPassword(password, sqlPassword);
  }
}