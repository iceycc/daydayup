import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import NodeAuth from 'node-auth0';
import { isInt } from 'class-validator';
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

  /**
   * @Description: 校验传递过来的页码
   * @return {type}
   * @param pageSize
   * @param pageNumber
   */
  public checkPage(pageSize: number, pageNumber: number): void {
    if (!isInt(Number(pageSize)) || !isInt(Number(pageNumber))) {
      throw new HttpException(`传递的pageSize:${pageSize},pageNumber:${pageNumber}其中一个不是整数`, HttpStatus.OK);
    }
  }
}