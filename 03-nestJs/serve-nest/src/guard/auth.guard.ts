import {
  Injectable,
  CanActivate,
  Logger,
  HttpException,
  HttpStatus,
  ExecutionContext,
} from '@nestjs/common';
import * as url from 'url';
import { RedisUtilsService } from 'src/modules/redis-utils/redis-utils.service';
import { jwt } from 'src/utils';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly redisUtilsService: RedisUtilsService,
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // token可能是在请求头,请求头,url地址中,不管是在哪里传递过来的都接收处理
    const token =
      context.switchToRpc().getData().headers.token ||
      context.switchToRpc().getData().headers['x-user-token'] ||
      context.switchToHttp().getRequest().body.token ||
      this.getUrlQuery(request.url, 'token');
    Logger.log(`当前的token: ${token}`, 'AuthGuard');
    if (token) {
      // 拿到token反解出里面的用户id,然后用用户id去redis里面查询redis里面的的token是否与当前的一致
      const currentUserId = jwt.decodeToken(token);
      const redisData = await this.redisUtilsService.get(currentUserId);
      console.log(JSON.stringify(redisData), 'redis数据');
      if (redisData && Object.is(token, redisData.token)) {
        request.user = redisData.user;
        return true;
      } else {
        throw new HttpException('token已经失效,请重新登录', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('你还没登录,请先登录', HttpStatus.UNAUTHORIZED);
    }
  }

  /**
   * @Description: 根据key从一段url中获取query值
   * @param urlPath {String} url地址
   * @param key {String} 获取单独的一个key
   * @return:
   */
  private getUrlQuery(urlPath: string, key?: string): string | { [propsName: string]: any } {
    const query = url.parse(urlPath, true).query;
    if (key) {
      return query[key];
    } else {
      return query;
    }
  };
}
