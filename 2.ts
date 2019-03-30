/**
 * 在分支中判断变量的具体类型
 * typeof
 */
function double(input: string | number | boolean) {
  if (typeof input == 'number') {
    return input * 2;
  }
  if (typeof input == 'string') {
    return input + input;
  }
  if (typeof input == 'boolean') {
    return !input;
  }
}

class Bird1 {
  name1: string;
}
class Dog1 {
  name2: string;
}
function getName(animal: Bird1 | Dog1) {
  if (animal instanceof Bird1) {
    return animal.name1;
  }
  if (animal instanceof Dog1) {
    return animal.name2;
  }
}
/**
 * null保护
 * 默认情况下为NULL的检查是不严格的
 */
function getFirstLetter(str: string | null) {
  //if(str == null){
  //  return '';
  //}
  function log() {
    console.log(str!.trim());
  }
  //这是第一种处理方式
  str = str || '';
  log();
  return str.charAt(0);
}
/**
 * 链判断运算符是一种先检查属性是否存在，再尝试访问该属性的运算符，其符号为?.
 * 链判断运算符 原理就是三元运算符
 * a?.b; //如果a是null/undefined,那么返回undefined，否则返回a.b的值.
 */
let a8: any = {
  b: 'zhufeng',
};
a8 = null;

//console.log(a8?.b);//zhufeng
console.log(a8 == null ? undefined : a8.b);

interface WarningButton {
  class: 'warning';
  text1: '修改';
}
interface DangerButton {
  class: 'danger';
  text2: '删除';
}
type Button = WarningButton | DangerButton;
function getButton(button: Button) {
  if (button.class == 'warning') {
    console.log(button.text1);
  }
  if (button.class == 'danger') {
    console.log(button.text2);
  }
}

interface Bird8 {
  swing: number;
}
interface Dog8 {
  leg: number;
}

function getNumber(animal: Bird8 | Dog8) {
  if ('swing' in animal) {
    console.log(animal.swing);
  }
  if ('leg' in animal) {
    console.log(animal.leg);
  }
}

interface Bird9 {
  name: string;
  swing: number;
}
interface Dog9 {
  name: string;
  leg: number;
}
function isBird(x: Bird9 | Dog9): x is Bird9 {
  return (x as Bird9).swing > 0;
  //return (<Bird9>x).swing>0;
}
//如果是鸟的话，返回鸟的翅膀的个数，如果是狗的话，返回狗的腿的个数
function getAnimal(x: Bird9 | Dog9) {
  if (isBird(x)) {
    console.log(x.swing);
  } else {
    console.log(x.leg);
  }
}
