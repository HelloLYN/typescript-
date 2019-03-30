/**
 * 函数声明
 */
function sum(a: number, b: number): number {
  return a + b;
}
sum(1, 2);
//函数表达式
//type用来定义类型别名
type GetUserName = (x: string, y: string) => void;
let getUserName: GetUserName = function(
  firstName: string,
  lastName: string,
): void {
  //return firstName+lastName;
};

//可选参数 这个参数可有可无,?表示可有可无
let items: number[] = [1, 2, 3];
type IteratorFunc = (item: number, index?: number, arr?: number[]) => void;
let iteratorFunc: IteratorFunc = function(
  item: number,
  index: number,
  arr: number[],
) {};

items.forEach(iteratorFunc);

//默认参数
function ajax(url: string, method: string = 'GET') {
  console.log(url, method);
}
ajax('/user');
//剩余参数
function sum2(prefix: string, ...args: number[]) {
  return prefix + args.reduce((val, item) => (val += item), 0);
}
let r = sum2('$', 1, 2, 3, 4);
console.log(r);

//函数的重载
//类型的别名
type MyType = string | number | boolean;
function getType(val: MyType): MyType {
  return val;
}
//规定这个函数只能接收三种类型string number boolean
//函数的重载
function double(val: string): string;
function double(val: number): number;
function double(val: boolean): boolean;
function double(val: any) {
  if (typeof val == 'string') {
    return val + val;
  }
  if (typeof val == 'number') {
    return val * 2;
  }
  if (typeof val == 'boolean') {
    return !val;
  }
}

double('zfpx');
double(10);
double(true);
