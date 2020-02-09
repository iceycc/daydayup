// 类型断言与类型守卫
interface Person {
  name: string;
  age: number;
}
const person = {} as Person; // 断言
person.name = 'xiaomuzhu';
person.age = 20;

const person1 = 'Tom' as unknown as Person //  双重断言
const person2 = 'Tom' as Person | unknown //  双重断言

// 类型守卫
// 缩小类型的范围

class PersonN {
	name = 'xiaomuzhu';
	age = 20;
}

class AnimalN {
	name = 'petty';
	color = 'pink';
}
// 思考 | & 链接两个类型类的区别
// instanceof
function getSometing(arg: PersonN | AnimalN) {
	if (arg instanceof PersonN) {
		// console.log(arg.color); // Error : 类型“PersonN”上不存在属性“color”。
		console.log(arg.age); // ok
	}
	if (arg instanceof AnimalN) {
		// console.log(arg.age); // Error : 类型“AnimalN”上不存在属性“age”。
		console.log(arg.color); // ok
	}
}

