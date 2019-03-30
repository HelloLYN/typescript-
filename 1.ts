/**
 * 接口的兼容性
 * 
 */
interface Animal7{
    name:string;
    age:number;
    gender:number
}
let a7:Animal7 = {
    name:'zhufeng',
    age:10,
    gender:0
}
interface Person7 {
    name:string;
    age:number;   
}
function getName(p:Person7):string{
  return p.name;
}
//在检查参数类型的时候，并不是真正的比较接口类型，而是比较的具体的属性是否兼容
getName(a7);

/**
 * 基本数据类型的兼容性
 */
let num:string|number;
let str:string;
num = str;

let num2:{
    toString():string
};
let str2:string;
num2 = str2;
//str2 = num2;
/**
 * 类的兼容性
 * 父子之间能不能赋值跟是不是父类子类一点关系都没有，关键就看要的属性有没有
 */
class Parent7{
     name:string
}
class Child7 extends Parent7{
    age:number
}
let p7:Parent7 = new Parent7();
let c7:Child7 = new Child7();

//把一个子类的实例赋给了父类的变量
let p77:Parent7 = new Child7();
//把一个父类的实例赋给一个子类的变量
let c77:Child7 = {name:'zhufeng',age:10}

/**
 * 函数的兼容性
 * 比较函数的时候先比较函数上的参数，再比较函数上的返回值
 * 参数是可以省略的
 */
type SumFunc = (a:number,b:number)=>number;
let sum4:SumFunc;
sum4 = function(a:number,b:number):number{
    return a+b;
}
sum4 = function(a:number):number{
    return a;
}
sum4 = function():number{
    return 0;
}
//这里可不是箭头函数 箭头左边是参数列表 右边是返回值是一个对象
type GetPerson = ()=>{name:string,age:number};
let getPerson:GetPerson;
getPerson = function(){
   return {name:'zhufeng',age:10};
}
getPerson = function(){
    return {name:'zhufeng',age:10,gender:'male'};
 }
 getPerson = function(){
    return {name:'zhufeng',age:10};
 }
 getPerson().age.toFixed(2);

/**
 * 双向协变
 */
type LogFunc = (val:number|string)=>void
let log:LogFunc;
log = function(val:number){
    console.log(val);
}
log = function(val:number|string|boolean){
    console.log(val);
}

/**
 * 泛型的兼容性
 * 泛型在判断兼容性的时候，会先判断具体 类型，再进行兼容性的判断
 */
interface Empty<T>{}
let x1:Empty<string>;
let y1:Empty<number>;
x1 = y1;

interface NotEmpty<T>{
    data:T
}
let x3:NotEmpty<string>={data:'123'};
let y3:NotEmpty<number>={data:123};
//x3 = y3;

/**
 * 枚举的兼容性
 * 枚举和数字兼容
 */
enum Colors2{
    Red,//0
    Yellow,//1
    Blue//2
}
let num4:number = Colors2.Red;
console.log(num4);//0
num4 = 2;
let c5:Colors2;
c5 = Colors2.Red;
c5 = 1;







