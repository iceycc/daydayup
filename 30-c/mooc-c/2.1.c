// 26字母 
#define MAXSIZE 100
typedef struct 
{
  /* data */
  char a[MAXSIZE+1];
  int n;
}sqlist;

// 学生信息表
#define MAXSIZE 100
struct student
{
  /* data */
  int num;
  char name[20];
  char sex;
  int age;
  float score;
};
typedef struct
{
  /* data */
  struct student s[MAXSIZE];
  int n; // 线性表长度
} sqlist;

