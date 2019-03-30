/**
 * 1. 描述对象的形状指的是描述对象长什么样了，描述对象属性的名称和值的类型
 *
 */
interface Speakable {
  name: string;
  speak(): void;
}
//当用接口描述对象的时候，多一个属性，少一个属性都不行
let p1: Speakable = {
  name: 'zhufeng',
  speak() {
    console.log('speak');
  },
};

/**
 * 2.可用来表示行为的抽象
 * 一个接口可以被多个类来实现，一个类也可以实现多个接口
 * 一个类只能有一个父类，但是一个父类可能有多个子类，这就是所谓的单继承
 */
interface Eatable {
  eat(): void;
}
class Person5 implements Eatable, Speakable {
  name: string;
  speak() {}
  eat() {}
}
class Duck5 implements Eatable {
  eat() {}
}

interface Person6 {
  readonly id: number;
  name: string;
  //表示未知的其它任意属性
  [propName: string]: any;
}
let p3: Person6 = {
  id: 1,
  name: 'zhufeng',
  age: 10,
  city: 'beijing',
};
//p3.id = 2;❌,readonly
/**
 * 接口也可以继承
 */
interface Speakable2 {
  speak(): void;
}
interface SpeakChinese extends Speakable2 {
  speakChinese(): void;
}
class ChinesePerson implements SpeakChinese {
  speak() {}
  speakChinese() {}
}
//接口还可以用来约束函数
interface Discount {
  (price: number): number;
}
function discount(price: number): number {
  return price * 0.8;
}
let d: Discount = discount;

/**
 * 可索引接口是可以对对象和数组进行约束
 */
interface UserInterface1 {
  [index: number]: string;
}
//数组有索引0,1,2,值是a,b,c
let user1: UserInterface1 = ['a', 'b', 'c'];
interface UserInterface2 {
  [index: string]: string;
}
//name:string,
let user2: UserInterface2 = { name: 'zhufeng' };

class Animal2 {
  constructor(public name: string) {}
}
interface WithNameClass {
  new (name: string): Animal2;
}
function createAnimal(clazz: WithNameClass, name: string) {
  return new clazz(name);
}
let a = createAnimal(Animal2, 'zhufeng');
