#include<stdio.h>

int sum(a,b)
{
	return a+b;
}
int sub(a,b)
{
	return a-b;
}
int multi(a,b)
{
	return a*b;
}

int main()
{
	printf("sum is : %d\n",sum(10,20));
	printf("substraction is :%d\n",sub(20,10));
	printf("Multiplication is :%d\n",multi(10,20));
	return 0;
}
