public class PrimitiveTypeTest{
    public static void main(String[] args){
        // byte
        System.out.println(Byte.SIZE);
        System.out.println("包装类 java.lang.Byte");
        System.out.println(Byte.MIN_VALUE);
        System.out.println(Byte.MAX_VALUE);
        System.out.println();

        // short
        System.out.println(Short.SIZE);
        System.out.println(Short.MIN_VALUE);
        System.out.println(Short.MAX_VALUE);
        System.out.println();

        System.out.println(Integer.SIZE);

        System.out.println(Long.SIZE);

        System.out.println(Float.SIZE);
        System.out.println(Double.SIZE);
        System.out.println(Character.SIZE);
        // System.out.println(Boolean.SIZE);
    }
}


public class Test{
    static boolean bool;
    static byte by;
    static short sh;
    static long lo;
    static int in;
    static float fl;
    static double do;
    static char ch;
    static String str;

    public static void main(String[] args){
        System.out.println("Bool :" + bool);
        System.out.println("Byte :" + by);
        System.out.println("Character:" + ch);
        System.out.println("Double :" + d);
        System.out.println("Float :" + f);
        System.out.println("Integer :" + i);
        System.out.println("Long :" + l);
        System.out.println("Short :" + sh);
        System.out.println("String :" + str);
    }
}

// int decimal = 100;
// int octal = 0144;
// int hexa = 0x64;

// (int)23.3