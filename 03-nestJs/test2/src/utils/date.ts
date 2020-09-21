import * as moment from 'moment';
/**
 * @param dateNum 时间
 * @param isDue 是否显示时分秒
 * @return:
 * @Description: 格式化日期
 */
export const formatDate = (
  dateNum: string | number,
  isDue = false,
): string => {
  if (!/^\d+$/.test(dateNum.toString())) {
    throw new TypeError(`${dateNum}传递的数据格式化错误`);
  }
  if (isDue) {
    return moment(dateNum).format('YYYY-MM-DD');
  } else {
    return moment(dateNum).format('YYYY-MM-DD HH:mm:ss');
  }
};

/**
 * @Description: 获取年月日时间
 * @param {type} 
 * @return: 
 */
export const getDay = (date: Date = new Date()): string => {
  return moment(date).format('YYYYMMDD');
}

/**
 * @Description: 获取当前的时间鹾
 * @param {type} 
 * @return: 
 */
export const getTime = (): number => {
  return new Date().getTime();
}