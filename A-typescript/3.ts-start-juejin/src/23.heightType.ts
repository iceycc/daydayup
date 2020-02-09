namespace h23 {
  /**
   * 条件类型的使用
   * T extends U ? X : Y
   */

  function f<T extends boolean>(x: T): T extends true ? string : number;
  function f(flag:boolean){
      if(flag){
        return 'xxxx'
      }else{
        return 111
      }
  }
  let rd = Math.random()
  const x = f(rd < 0.5)
  console.log(x)
  // const y = f(false)
  // const z = f(true)


  /**
   * 条件类型与联合类型
   */
  // 裸类型参数,没有被任何其他类型包裹即T
type NakedUsage<T> = T extends boolean ? "YES" : "NO"
// 类型参数被包裹的在元组内即[T]
type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";

type Distributed = NakedUsage<number | boolean> //  = NakedUsage<number> | NakedUsage<boolean> =  "NO" | "YES"
type NotDistributed = WrappedUsage<number | boolean > // "NO"

// Diff<T, U>, T类型中U不包含的部分:
type Diff<T, U> = T extends U ? never : T;
type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

// 类似于js数组的filter
type Filter<T, U> = T extends U ? T : never;
type R1 = Filter<string | number | (() => void) | true, boolean>;

// 剔除 null和undefined
type NonNullable<T> = Diff<T, null | undefined>;
type R2 = NonNullable<string | number | undefined>;  // string | number



interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}
// 取接口中值为函数类型的key
type FunctionPropertyNames<T> =  {[K in keyof T]:T[K] extends Function ? K : never}[keyof T]
type R3 = FunctionPropertyNames<Part>;
// 一对一映射
type Inter<T> = {[K in keyof T]:T[K]}
type R4 = Inter<Part>


}