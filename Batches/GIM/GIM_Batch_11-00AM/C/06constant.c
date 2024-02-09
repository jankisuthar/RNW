#include<stdio.h>

int main()
{
	int a;
	int b;
	const int c = 15;  //valid
	
	a = 12;
	b = 23;
//	c = 15;  not valid
	
	printf("sum of three values are : %d",a+b+c);
	return 0;
}
