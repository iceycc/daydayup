#include <stdio.h>
#include <stdlib.h>
#define Size 4
typedef struct Table{
    int * head;
    int length;
    int size;
}table;
table initTable(){
    table t;
    t.head=(int*)malloc(Size*sizeof(int));
    if (!t.head)
    {
        printf("初始化失败");
        exit(0);
    }
    t.length=0;
    t.size=Size;
    return t;
}
table addTable(table t,int elem,int add)
{
    if (add>t.length+1||add<1) {
        printf("插入位置有问题");
        return t;
    }
    if (t.length>=t.size) {
        t.head=(int *)realloc(t.head, (t.size+1)*sizeof(int));
        if (!t.head) {
            printf("存储分配失败");
        }
        t.size+=1;
    }
    for (int i=t.length-1; i>=add-1; i--) {
        t.head[i+1]=t.head[i];
    }
    t.head[add-1]=elem;
    t.length++;
    return t;
}
void displayTable(table t){
    for (int i=0;i<t.length;i++) {
        printf("%d",t.head[i]);
    }
    printf("\n");
}
int main(){
    table t1=initTable();
    for (int i=1; i<=Size; i++) {
        t1.head[i-1]=i;
        t1.length++;
    }
    printf("原顺序表：\n");
    displayTable(t1);
   
    printf("在第2的位置插入元素5:\n");
    t1=addTable(t1, 5, 2);
    displayTable(t1);
    return 0;
}