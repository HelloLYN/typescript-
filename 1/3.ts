/**
 * 字面量的联合
 * 类型的联合
 * 只能是下面这几个值
 */

let grade: 1 | 2 | 10 = 1;
grade = 10;

let level: 'A' | 'B' = 'A';
level = 'B';
