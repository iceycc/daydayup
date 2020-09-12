/**
 * 学生抽象类 观察者
 * watcher
 */
abstract class Student {
    constructor(public teacher: Teacher) { }
    //每个观察都都有一个update方法，用来在被观察 对象更新的时候进行自我更新
    public abstract update(): void;
}

/**
 * 观察者  学霸
 */
class Xueba extends Student {
    public update(): void {
        if (this.teacher.getState() == '老师提问') {
            console.log(this.teacher.getState(), '抬头举手');
        }
    }
}
/**
 * 观察者 学渣
 */
class XueZha extends Student {
    public update(): void {
        if (this.teacher.getState() == '老师提问') {
            console.log(this.teacher.getState(), '低头看脚');
        }
    }
}
/**
 * 被观察者 老师
 */
class Teacher {
    private students: Student[] = []
    private state: string = '讲课';
    public askQuestion() {
        this.state = '老师提问';
        this.notifyAllStudents();
    }
    getState() {
        return this.state;
    }
    attach(student: Student) {
        this.students.push(student);
    }
    notifyAllStudents() {
        this.students.forEach(student => student.update());
    }
}
let teacher = new Teacher();
teacher.attach(new Xueba(teacher));
teacher.attach(new XueZha(teacher));
teacher.askQuestion();