import java.io.*;

public class EmployeeTest {
    public static void main(String[] args){
        // 使用构造函数创建两个对象
        Employee empOne = new Employee("Tom1");
        Employee empTow = new Employee("Tom2");

        // 调用这两个对象的成员方法
        empOne.empAge(25);
        empOne.empDesignation("FE");
        empOne.empSalary(1000.00);
        empOne.printEmployee();
        empTow.empAge(26);
        empTow.empDesignation("QA");
        empTow.empSalary(1500.00);
        empTow.printEmployee();
    }
}

// 四整形 byte short init long
// 两浮点 float double
// char
// boolean