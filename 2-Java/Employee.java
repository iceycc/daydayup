import java.io.*;

public class Employee{
    public String name; // 这个实例变量对子类可见
    private int age; // 私有变量，仅在该类可见 
    private String designation;
    private static double salary; // 静态对私有变量

    public static final String DEP = '开发人员';

    // Employee构造器
    public Employee(String empName){
        // this.name = name; 
        name = empName;
    }
    // 设置age的值
    public void empAge(int empAge){
        age = empAge;
    }
    // 设置designation的值
    public void empDesignation(String empDesig){
        designation = empDesig;
    }
    // 设置salary的值
    public void empSalary(double empSalary){
        salary = empSalary;
    }
    // 打印信息
    public void printEmployee(){
        System.out.println("name  is " + name);
        System.out.println("age is " + age);
        System.out.println("designation is " + designation);
        System.out.println("salary is " + salary);
    }
    public static void main(String[] args){
        Employee emOne = new Employee("Tom");
        emOne.empAge(26);
        emOne.empDesignation("FE");
        emOne.empSalary(2000);
        emOne.printEmployee();
    }
}