#include<stdio.h>

int main(){
	int a = 10,b = 8;
	
	if(a==b)
	{
		printf("both are same value!");
	}
	else if(a<b)
	{
		printf("a is less than b!");
	}
	else if(a>b)
	{
		printf("a is greater than b");
	}
	else
	{
		printf("no match found");
	}
	return 0;
}
