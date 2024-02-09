#include<stdio.h>

int main(){
	int num;
	
	printf("Enter any number : ");
	scanf("%d",&num);
	
	if(num%2 == 0)
	{
		printf("Given Number is even");
	}
	else
	{
		printf("Given Number is odd");
	}
	return 0;
}
