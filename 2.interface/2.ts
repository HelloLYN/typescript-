function createArray(length: number, val: any): any[] {
  let arr: any[] = [];
  for (let i = 0; i < length; i++) {
    arr[i] = 1;
  }
  return arr;
}
let a1 = createArray(3, 'x'); //['x','x','x']
/**
 * 泛型就是定义方法的时候不指定具体类型，而是在使用的时候指定具体类型的
 * 只能呢在函数内部使用
 * @param length
 * @param val
 */
function createArray2<T>(length: number, val: T): T[] {
  let arr: T[] = [];
  for (let i = 0; i < length; i++) {
    arr[i] = val;
  }
  return arr;
}

createArray2<number>(3, 8); //[8,8,8]

//类数组的定义,这个是内部定义好了的,不需要自己写
interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}
/**
 * 类数组
 */
function sum(...args: number[]) {
  let a2: IArguments = arguments; //arguments就是类数组
  let result: number = 0;
  for (let i = 0; i < a2.length; i++) {
    result += a2[i];
  }
  return result;
}
sum(1, 2, 3);
//类型推论,ts会帮你猜出来
let root = document.getElementById('root');
//length 通过索引访问的
let children: HTMLCollection = root.children;
let childNodes: NodeListOf<ChildNode> = root.childNodes;

/**
 * 泛型类 在类中使用泛型
 * T= Type
 */
class MyArray<T = number> {
  list: T[] = [];
  add(val: T) {
    this.list.push(val);
  }
  getFirst(): T {
    return this.list[0];
  }
}
let myArray = new MyArray();
myArray.add(1);
myArray.add(2);
myArray.add(3);
let f = myArray.getFirst();
console.log(f);
/**
 * 泛型接口就是在定义接口的时候使用泛型
 */
interface SUM<T> {
  (a: T, b: T): T;
}
let sum3: SUM<number> = function(a: number, b: number): number {
  return a + b;
};
let r2 = sum3(1, 2);
/**
 * 泛型可以有多个
 * tuple 长度和类型都确定的数组
 */
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]]; //[1,'a']
}
swap<string, number>(['a', 1]);

//因为在定义函数的时候并不知道这个T是什么类型
interface LengthWise {
  length: number;
}
//明确类型
function logger<T extends LengthWise>(val: T) {
  console.log(val.length);
}
logger<string>('hello');

/**
 * 泛型类型的别名
 */
type Cart<T> = { list: T[] } | T[];
let cart: Cart<string> = ['a', 'b', 'c'];
let cart2: Cart<string> = { list: ['a', 'b', 'c'] };
/**
 * 泛型接口 泛型类型别名的区别与联系
 * 1.接口会创建一个新的名称，别名不会
 * 2.别名不能被继承和实现
 *
 */

interface A {}
interface B {}
type A1 = A | B;
type A2 = A;

class Aperson implements A, B {}
