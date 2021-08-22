public class InstanceCounter {
    private static int numInstance = 0;
    protected static int getCount(){
        return numInstance;
    }
    final int value = 10;

    private static void addInstance(){
        numInstance++;
    }
    InstanceCounter(){
        // value = 11; // The final field InstanceCounter.value cannot be assigned
        InstanceCounter.addInstance();
    }
    
    public static void main(String[] args){
        System.out.println("Starting with" + InstanceCounter.getCount() + " instances");
        for (int i=0; i<500;i++){
            new InstanceCounter();
        }
        System.out.println("Starting with" + InstanceCounter.getCount() + " instances");
    }
}

abstract class Caravan{
    double price;
    private static String name;
    private String model;
    protected String year;
    volatile boolean isShow;
    public abstract void goFast(); // 抽象方法
    public abstract void changeColor();
    public transient int limit = 55;
    public synchronized void showDetail(){};
    public void setColor(){

    }
}
class Car extends Caravan{
    private double price;
    private String model;
    // public String year;
    public void goFast(){

    };
    public void changeColor(){

    };
    public void setColor(){

    }
}