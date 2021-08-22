public class Dog {
    int dogAge;
    public Dog(String name){
        System.out.println("Dog name is " + name);
    }
    public void setAge(int age){
        dogAge = age;
    }

    public int getAge(){
        System.out.println("Dog age is  " + dogAge);
        return dogAge;
    }

    public  static void main(String[] args){
        // 创建对象
        Dog myDog = new Dog("Tom");

        // 通过方法设置年龄
        myDog.setAge(10);
        // 获取年龄
        myDog.getAge();
        // 可以在直接访问
        System.out.println("变量值："+ myDog.dogAge);
    }
}