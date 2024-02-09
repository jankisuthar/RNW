#include<stdio.h>

int main()
{
	int number,result;
	
	printf("Enter any Positive number : ");
	scanf("%d",&number);
	
	result = sum(number);
	printf("sum = %d",result);
	return 0;
}
int sum(int n)
{
	if(n!=0)
	{
		return n+sum(n-1);  //function call itself
	}
	else
	{
		return n;
	}
}
