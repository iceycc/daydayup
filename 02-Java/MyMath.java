public class MyMath {
    public static void main(String args[]){
        Integer x = 5;
        // x =  x + 10;
        // System.out.println(x); 
        Math.sin(Math.PI/2);
        Math.cos(0);
        Math.tan(Math.PI/3);
        Math.atan(1);
        Math.toDegrees(Math.PI/2);

        // 返回 byte 原生数据类型
        System.out.println( x.byteValue() );
   
        // 返回 double 原生数据类型
        System.out.println(x.doubleValue());
   
        // 返回 long 原生数据类型
        System.out.println( x.longValue() );  

        System.out.println(x.compareTo(3));
        System.out.println(x.compareTo(5));
        System.out.println(x.compareTo(8)); 
        Double c = Double.valueOf(1);
        System.out.println(c);
        double f = 100.123;
        System.out.println(Math.rint(f));

        System.out.println(Math.random());
     }
}