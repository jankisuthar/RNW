#include<stdio.h>

int main()
{
	int a;
	float b;
//	const char c; //not valid
	const char c = 'l';
	
	a = 12;
	b = 85.6;
	
	printf("Sum of a+b : %f\n",a+b);
	printf("value of c is :%c",c);
	return 0;
}
