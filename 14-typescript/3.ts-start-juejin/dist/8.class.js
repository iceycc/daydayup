"use strict";
class Animal {
    move() {
        console.log('roaming the earch...');
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('miao miao');
    }
}
let cat = new Cat();
cat.makeSound();
cat.move();
class Car {
    run(name = '') {
        console.log(name + ' 启动...');
        this.say(name);
        this.move(name);
    }
    move(type) {
        console.log(type + ' 移动...');
    }
    say(name) {
        console.log('I am a ' + name + ' car');
    }
}
class GTR extends Car {
    init(name = '') {
        this.run(name + ' init');
        this.say(name);
    }
}
const car = new Car();
const gtr = new GTR();
car.run('Car');
gtr.init('gtr');
class Props {
    constructor() {
        this.children = [];
        this.height = 160;
        this.animation = 'easeInOutQuad';
        this.isAuto = true;
        this.autoPlayInterval = 4500;
        this.selesctedColor = 'red';
        this.showDots = true;
    }
}
const defaultProps = new Props();
defaultProps.speed = 50;
defaultProps.beforeChange = function () {
    console.log('1');
};
console.log(defaultProps.height);
