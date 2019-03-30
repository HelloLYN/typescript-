/**
 * 接口
 * 1.用一描述一种对象结构或者说对象的形状
 * 2.用来描述一种抽象的特性集合
 */
interface UserInterface  {
    name:string
    age:number
}
let user:UserInterface = {
    name:'zhufeng',
    age:10
}

interface Flyable{
    fly():void
}

class Bird implements Flyable{
    fly(){
        console.log('小鸟飞')
    }
}