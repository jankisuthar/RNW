#include<stdio.h>

int main(){
	int a;
	int b;
	int sum;
	int substraction;
	int multi;
	int divide;
	int modulo;
	printf("Enter the First Value:");
	scanf("%d",&a);
	
	printf("Enter the Second value:");
	scanf("%d",&b);
	
	sum = a+b;
	printf("sum of two values are :%d\n",sum);
	
	substraction=a-b;
	printf("substraction of two values are :%d\n",substraction);
	
	multi=a*b;
	printf("Multiplication of two values are :%d\n",multi);
	
	divide=a/b;
	printf("Division of two values are :%d\n",divide);
	
	modulo=a%b;
	printf("Modulo of two values are :%d",modulo);
	
	return 0;
}
