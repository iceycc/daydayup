
public class Test{
    static void eating1(int n){
        int time = 0;
        for(int i=0;i<n;i++){
            time+=3;
            System.out.println("waiting 3 min");
            System.out.println("吃1cm 面包");
        }
        System.out.println("\n 吃面包一共多久"+time);
    }
    static void eating2(int n){
        int time = 0;
        for(int i=n;i>1;i/=2){
            time+=5;
            System.out.println("waiting 5 min");
            System.out.println("吃一半 面包");
        }
        System.out.println("\n 吃面包一共多久："+time);
    }
    static void eating3(int n){
        int time = 0;
        time++;
        System.out.println("等了一分钟");
        System.out.println("吃了一个鸡腿");
        System.out.println("\n 吃面包一共多久："+time);
    }
    static void eating4(int n){
        int time = 0;
        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                time++;
                System.out.println("等一分钟");
            }
            System.out.println("吃一半 面包");
        }
        System.out.println("\n 吃面包一共多久："+time);
    }
    public static void main(String[] args){
        eating1(10);
        eating2(10);
        eating3(10);
        eating4(10);
    }

    static void counter(){
        
    }
}