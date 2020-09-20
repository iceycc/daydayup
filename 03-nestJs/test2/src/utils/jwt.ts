import NodeSSO from 'node-sso';

class JWT {
  private nodeSSO: NodeSSO;
  constructor (secret: string) {
    this.nodeSSO = new NodeSSO(secret);
  }

  /**
  * @Description: 根据用户信息生成一个token
  * @param {type} 
  * @return: 
  */
  public createToken(user: string | { [propsName: string]: any }): string {
    return this.nodeSSO.generateToken(user);
  }

  /**
  * @Description: 解析token返回token中的用户信息
  * @param {type} 
  * @return: 
  */
  public decodeToken(token: string): string | null {
    return this.nodeSSO.decryptToken(token);
  }
}
export const jwt = new JWT(process.env.SECRET);