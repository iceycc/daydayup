class MyArray{
    constructor(capacity){
        this.array = new Array(capacity);
        this.size = 0;
    }
    insert(element,index){
        if(index<0 || index>this.size){
            throw new Error("超出范围");
        }
        // 如果实际元素达到数组容量上限，对数组进行扩容
        if(index>=this.array.length){
            this.resize()
        }
        // 从左往右，将元素逐个往右移动
        for(let i=this.size-1;i>=index;i--){
            this.array[i+1] = this.array[i];
        }
        this.array[index] = element;
        this.size++;
    }

    delete(index){
        if(index<0 || index>this.size){
            throw new Error("超出范围");
        }
        let removeNode = this.array[index];
        for(let i=index;i<this.size-1;i++){
            this.array[i] = this.array[i+1];
        }
        this.size--;
        return removeNode;
    }
    /**
     * 数组扩容
     */
    resize(){
        let newArray = new Array(this.array.length * 2);
        this.array = this.array.concat(newArray);
    }
    /**
     * 输出数组
     */
    output(){
        for(let i=0;i<this.size;i++){
            console.log(this.array[i]);
        }
    }
}

const myArr = new MyArray(10);
myArr.insert(3, 0);
myArr.insert(7, 1);
myArr.insert(9, 2);
myArr.insert(3, 3);
myArr.insert(6, 1);
myArr.insert(1, 2);
myArr.delete(6);
myArr.output()

