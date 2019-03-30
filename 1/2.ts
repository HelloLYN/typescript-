//类型推论,自动推导出值的类型,定义时未赋值->any
let name2;
name2 = 10;
name2 = '';

//包装类
//基本数据类型是没有方法的
let name3 = 10;
console.log(name3.toFixed(3));
//当你在一个基本数据类型上调用方法的时候，会立刻隐含的把一个基本类型包装成对象类型
//内部行为
let name4 = 'zhufneg';
new String('zhufeng').toLocaleLowerCase();

let hasGirl: boolean = true;
hasGirl = Boolean(true);
//hasGirl = new Boolean(true);

//联合类型
let name5: string | number | boolean;
name5 = 'zhufeng';
name5 = 10;

//类型断言
let name6: string | number | boolean;
name6 = 'zhufeng';
(name6 as string).length;
function getName6(val: string | number | boolean) {
  (val as string).length;
}
