// /**
//  * 面向对象的四个特性
//  * 抽象  
//  */
// interface IStorage {
//     save(key: string, value: any): void;
//     read(key: string): any;
// }
// class UserInfo {
//     public name: string;
//     constructor(name: string, public storage: IStorage) {
//         this.name = name;
//     }
//     save() {
//         this.storage.save('userInfo', JSON.stringify(this));
//     }
//     read() {
//         return this.storage.read('userInfo');
//     }
// }
// class LocalStorage implements IStorage {
//     save(key: string, value: any): void {
//         localStorage.setItem(key, value);
//     }
//     read(key: string) {
//         return localStorage.getItem(key);
//     }
// }
// let local = new LocalStorage();
// class MysqlStorage implements IStorage {
//     save(key: string, value: any): void {
//         //mysql.setItem(key, value);
//     }
//     read(key: string) {
//         //return mysql.getItem(key);
//     }
// }
// let mysqlStorage = new MysqlStorage();
// let userInfo = new UserInfo('zhufeng', mysqlStorage);
// console.log(userInfo.name);


/**
 * 设计一个UserInfo的类：1、保存用户信息 2 读取用户信息
 */

 interface IStorage{
     save(key:string,value:any):void;
     read(key:string):any;
 }
 class UserInfo {
     public name:string;
     constructor(name:string,public storage:IStorage){
       this.name = name 
     }
     save(key,value){
         this.storage.save(key,value)
    }
    read(key){
        this.storage.read(key)
    }
 }

 class LocalStorage implements IStorage{
     save(key: string, value: any): void {
        
    }    
      read(key: string) {
     }

 }


 
 let local = new UserInfo('name',new LocalStorage())
 console.log(local.name)