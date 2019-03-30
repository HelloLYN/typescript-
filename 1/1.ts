//1.基本数据类型
let name1: string = 'zhufeng4';
let age: number = 10;
let isAlive: boolean = true;
let x: undefined = undefined;
let y: null = null;
name1 = null;
name1 = undefined;
//2.数组 1. 长度任意 2. 类型必须是统一的
let names: string[] = ['a', 'b', 'c'];
let names2: Array<string> = ['a', 'b', 'c'];
//3. tuple 元组 是一个长度和类型都确定的数组
let person: [string, number, string] = ['zhufeng', 10, 'male'];
console.log(person[0].length);
console.log(person[1].toFixed(2));
console.log(person[2].length);
//枚举类型
//BOY:0,GIRL:1,默认从零开始
enum Gender {
  BOY,
  GIRL,
}
let boy: number = Gender.BOY;

//常数枚举,0,1,2
const enum Colors {
  RED,
  YRLLOW,
  BLUE,
}
let colors = [Colors.RED, Colors.YRLLOW, Colors.BLUE];
//any表示任意类型
let x2: any;
x2 = 'zhufeng';
x2 = 10;
x2 = null;
x2 = undefined;
//never 永远不

//1. 作为没有返回值的函数的返回值类型
function getY(): never {
  console.log(1);
  throw new Error('报错了');
  console.log(2);
}
// 死循环,永远不会输出
function sum(): never {
  while (true) {}
  console.log(2);
}
sum();
// void能正常运行,never无法正常返回/终止
function getName(): void {
  console.log('hello');
  return null;
}
