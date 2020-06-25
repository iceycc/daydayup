int a,b,c;
int d = 3, e = 4, f = 5;
byte z = 22;
String s = "runoob";
double pi = 3.1415926;
char x = "x";

public class Variable{
    static int allCicks = 0; // 实例变量
    String str = "hello world"; //实例变量
    public void method(){
        int i = 0; //局部变量
        i = i + 1;
    }
    public static void main(String[] args){
       Variable v = new Variable();
       v.method()
    }
}