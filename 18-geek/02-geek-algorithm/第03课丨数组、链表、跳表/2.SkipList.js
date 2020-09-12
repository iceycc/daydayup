/**
 * 跳表 
 * 应用：Redis
 * 为了优化链表 lookup操作
 * 优化 中心思想：
 *  1 升维
 *  2 空间换时间
 * 
 * 
 * 优化：
 * 1. 增加尾指针
 * 2. 中指针
 * 3. 多指针=》跳表
 * 3. 跳表：
 *    索引 next + 1 =》 速度 * 2
 *    多级索引：
 *      原始链表：next + 1
 *      一级索引：next + 4
 *      三级索引：next + 8 
 *      三级索引：next + 16 。。。
 *    log2n - 1
 * 跳表查询：
 *    时间复杂度： o(log(n))
 *    空间复杂度： o(n)  
 * 
 * 跳表的 插入和删除时间负责度log(n)
 * 
 * 
 * LRU  https://leetcode-cn.com/problems/lru-cache/
 *     
 */
