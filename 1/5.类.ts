/**
 * 定义一个类
 * get set 存取器
 */
class Person {
  name: string;
  getName(): void {
    console.log(this.name);
  }
}
//get set
class Person2 {
  myname: string;
  constructor(myname: string) {
    this.myname = myname;
  }
  //获取name属性的值
  get name() {
    return this.myname;
  }
  set name(newVal) {
    this.myname = newVal;
  }
}
let p2 = new Person2('zhufeng');
console.log(p2.name);
p2.name = 'jiagou';

//参数的属性
//加上了public之后就相当于给当前类的实例增加了一个公有属性
//public private protected
class Person3 {
  constructor(public myname: string) {}
}
//readonly只读
class Person4 {
  public readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}
let p4 = new Person4(1);
console.log(p4.id);
//p4.id = 2;不能更改,readonly

//父类 子类 其它的地方
class Parent {
  public name: string; //公有的name属性,所有地方都能访问
  protected age: number; //受有限度的保存的属性,只能在自己的自己的子类中被访问,
  private money: number; //私有属性 只能自己访问，连自己的子类都不能访问
  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
  getName() {
    console.log('父类 getName:' + this.name);
  }
  getAge() {
    console.log('父类 getAge:' + this.age);
  }
  getMoney() {
    console.log('父类 getMoney:' + this.money);
  }
}
class Child extends Parent {
  getName() {
    console.log('子类:' + this.name);
  }
  getAge() {
    console.log('子类 getAge:' + this.age);
  }
  getMoney() {
    console.log('父类 getMoney:' + this.money);
  }
}
let c = new Child('zhufeng', 10, 100);
c.getName();
c.name;
//c.age; protected,只能在子类或自己种被访问

class Father {
  // 静态属性
  static myname: string = 'zhufeng';
  // 静态方法
  static getMyName() {
    return Father.myname;
  }
}
console.log(Father.myname);
Father.getMyName();

//抽象类
/**
 * 抽象类是一种抽象的概念，无法被实例化,只能被继承
 * 抽象类里的方法是抽象的
 * 重写
 * 重载
 * 继承抽象父类时,一定也要把父类的抽象方法继承过来
 */
abstract class Animal {
  name: string;
  abstract speak();
}

class Cat extends Animal {
  speak() {
    console.log('喵喵喵');
  }
}
class Dog extends Animal {
  speak() {
    console.log('汪汪汪');
  }
}
