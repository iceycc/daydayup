/**
 * 分别是关联(聚合和组合)、泛化和依赖
 * 关联
 */
export { }
// 双向关联
// 单项关联
class Category {
    //也是关联 双向关联，互相关联
    public products: Array<Product>;
}
class Product {
    //产品类有一个实例属性是分类，那么就认为产品关联了分类
    //单向关联和双向关联
    public category: Category;
}
// Class 和 Student 聚合 一个班级会有好多学生
class Class {
    public students: Array<Student>
}
class Book {

}
class Pen {

}
// Student 和 Book 、 Pen是依赖
class Student {
    //如果是另外一个类是当前类的方法和属性或者 是局部变量就是依赖关系
    read(book: Book) {
        let pen = new Pen();
    }
}
class Heart {

}
class Person {
    public heart: Heart;
}
//从弱到强   依赖>关联>聚合>组合

//尽量使用组合或者 聚合，而不是使用继承
class Cooker {
    cook() {

    }
}
// Person2 和 Cooker 是 组合关系
class Person2 {
    private cooker: Cooker;
    cook() {
        this.cooker.cook();
    }
}
// Person3 和 Cooker 是继承关系
//继承耦合太强
class Person3 extends Cooker {
}