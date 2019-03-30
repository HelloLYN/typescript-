/**
 * 交叉类型
 * 是将多个类型转成一个类型
 */
interface Bird10{
    name:string;
    fly():void
}
interface Person10{
    name:string;
    eat():void
}
//取的是接口中属性的并集
type BirdMan = Bird10 & Person10;
let bm:BirdMan = {
    name:'zhufeng',
    fly(){},
    eat(){}
}
//刚才我们说的是兼容性检查，仅在传参的时候可以那样去判断，属性可以多,但是赋值的时候不行


let p = {
  name:'zhufeng',
  age:10
}
type People = typeof p;
let p10:People= {
    name:'zhufeng2',
    age:10
}
/**
function getName(p:People){
  return p.name;
}
getName(p);
 */

 interface Person {
     name:string;
     age:number;
     job:{
         name:string
     },
     hobbies:{name:string,level:number}[]
 }
 let job:Person['job'] = {name:'前端'};
 let hobbyLevel:Person['hobbies'][0]['level'] = 10;
 let hobbyLevel2:number = 10;

 interface Person11{
     name:string;
     age:number;
     gender:'male'|'female'
 }
 function getValueByKey(p:Person11,key:keyof Person11){
    return p[key];
 }
 let p11:Person11 = {
     name:'zhufeng',age:10,gender:'male'
 }
 let r11 = getValueByKey(p11,'gender');//zhufeng

 interface Person12{
    name:string;
    age:number;
    gender:'male'|'female'
}
type PartPerson = {
    [key in keyof Person12]?:Person12[key];
    /**
    name?:string;
    age?:number;
    gender?:'male'|'female'
     */
}
let p12:Pick<Person12,'name'> = {
    name:'zhufeng'
}

interface Fish{
    name1:string;
}
interface Water{
    name2:string
}
interface Bird{
    name3:string;
}
interface Sky{
    name4:string
}
type Condition<T> = T extends Fish?Water:Sky;
let con:Condition<Fish> = {name2:'water'};
let con2:Water = {name2:'water'};