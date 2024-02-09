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
	printf("Sum = %d\n",sum(10,20));
	printf("Substraction = %d\n",sub(20,10));
	printf("Multiplication = %d\n",multi(20,10));
	
	return 0;
}
