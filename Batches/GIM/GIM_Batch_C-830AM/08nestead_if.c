#include<stdio.h>

int main(){
	int a;
	int b;
	
	a=5;
	b=0;
	
	if(a>b)
	{
		if(a!=0  && b!=0)
		{
			printf("a is greater value!");
		}
		else
		{
			printf("any one value is negative");
		}
	}
	else
	{
		printf("b is greater value");
	}
	return 0;
}
